import { number } from 'prop-types'
import * as chessLib from './chess.js'
import * as ai from './ai.js'
import { PIECES_SVG } from './pieces.js'

const { widget } = figma
const { Frame, AutoLayout, SVG, Text, useSyncedState, usePropertyMenu, useEffect, waitForTask } = widget

function Chess() {
  const newBoardFen = (): string => {
    const board = new chessLib.Chess()
    return board.fen()
  }

  const [boardFen, setBoardFen] = widget.useSyncedState<string>("boardFen", newBoardFen())
  // Stores a selected square in algebraic notation.
  const [selected, setSelected] = widget.useSyncedState<string>("selected", null)
  const [computer, setComputer] = widget.useSyncedState<boolean>("computer", false)

  const chess = new chessLib.Chess(boardFen)
  const board: any[][] = chess.board()

  const propertyMenu: any[] = [
    {
      tooltip: 'New Game (2 Players)',
      propertyName: 'reset',
      itemType: 'action',
    },
    {
      tooltip: 'New Game (Against AI)',
      propertyName: 'reset-computer',
      itemType: 'action',
    },
  ]
  usePropertyMenu(
    propertyMenu,
    async ({ propertyName }) => {
      if (propertyName === 'reset') {
        setBoardFen(newBoardFen())
        setSelected(null)
        setComputer(false)
      } else if (propertyName === 'reset-computer') {
        setBoardFen(newBoardFen())
        setSelected(null)
        setComputer(true)
      }
    },
  )

  const endGameCondition: string = (() => {
    if (chess.in_checkmate()) {
      return `Checkmate! ${chess.turn() == 'w' ? 'Black' : 'White'} wins.`
    } else if (chess.in_draw()) {
      return 'The game is a draw.'
    } else if (chess.in_stalemate()) {
      return 'The game is a stalemate.'
    } else if (chess.in_threefold_repetition()) {
      return 'The game is a draw by repetition.'
    } else {
      return ''
    }
  })()

  const select = ({ row, column }) => {
    if (endGameCondition.length > 0) {
      return
    }

    const position = indexToPositionString(row, column)
    if (selected && selected === position) {
      setSelected(null)
    } else if (selected) {
      const move = { from: selected, to: position }
      if (chess.move(move)) {
        setBoardFen(chess.fen())
        setSelected(null)

        if (computer) {
          // Playing against AI.
          const notification = figma.notify("Computing move...")
          waitForTask(new Promise<void>(resolve => {
            setTimeout(() => {
              const move = ai.getBestMove(chess, chess.turn(), 0)[0];

              if (chess.move(move)) {
                setBoardFen(chess.fen())
                setSelected(null)
                notification.cancel()
              } else {
                // Must be end of game!
              }
              resolve()
            }, 50);
          }))
        }
      } else {
        if (chess.in_check()) {
          figma.notify("You're in check! 😬", { timeout: 2000 })
        } else {
          figma.notify("Legal moves only, please! 😊", { timeout: 2000 })
        }
        setSelected(null)
      }
    } else {
      if (board[row][column] && board[row][column].color === chess.turn()) {
        // Only select non-empty cells of the correct color.
        setSelected(position)
      } else if (board[row][column]) {
        const color = chess.turn()
        figma.notify(`It's currently ${color === 'b' ? 'black' : 'white'}'s turn`, { timeout: 2000 })
      }
    }
  }

  // Converts an index into the 2D board array to algebraic notation.
  const indexToPositionString = (row, column): string => {
    // Board is represented as a 2D array, where [0][0] is a8.
    //
    // `a` is 97
    return String.fromCharCode(97 + column) + (8 - row)
  }

  // const boards = [];
  const boards = (computer ? ['w'] : ['w', 'b']).map(color => {
    const flipped = 'b' === color
    let flippedBoard
    if (flipped) {
      flippedBoard = board.slice().reverse()
    } else {
      flippedBoard = board
    }

    return <AutoLayout
      direction={"vertical"}
      horizontalAlignItems={"center"}
      verticalAlignItems={"center"}
      height={"hug-contents"}
      width={"hug-contents"}
      cornerRadius={30}
      key={`color:${color}`}
      stroke={"#000000"}
      strokeWidth={(chess.turn() === color ? 3 : 0)}
    >
      {flippedBoard.map((row, rowIndex) => {
        if (flipped) {
          rowIndex = 7 - rowIndex
        }
        return <AutoLayout
          direction={"horizontal"}
          horizontalAlignItems={"center"}
          verticalAlignItems={"center"}
          height={"hug-contents"}
          width={"hug-contents"}
          key={`row:${rowIndex}`}
        >
          {row.map((cell: { type: string, color: string }, columnIndex) => (
            <AutoLayout
              fill={
                selected && selected === indexToPositionString(rowIndex, columnIndex) ? "#F7F586" : (rowIndex + columnIndex) % 2 == 0 ? "#ECEED4" : "#78955B"
              }
              // Cells are only clickable if they contain a piece or we've already
              // selected a piece.
              onClick={cell || selected ? () => {
                select({
                  row: rowIndex,
                  column: columnIndex
                });
              } : null}
              key={`row:${rowIndex},col:${columnIndex}`}
            >
              {cell ?
                <SVG
                  src={PIECES_SVG[cell.color][cell.type]}
                  height={100}
                  width={100}
                />
                : <Frame
                  width={100}
                  height={100}
                />}

            </AutoLayout>
          ))}
        </AutoLayout>
      })}
    </AutoLayout>
  })

  return (
    <AutoLayout
      direction={"vertical"}
      horizontalAlignItems={"center"}
      verticalAlignItems={"center"}
      height={"hug-contents"}
      width={"hug-contents"}
      padding={10}
      // stroke={"#AAAAAA"}
      // strokeWidth={6}
      // cornerRadius={30}
      // fill={"#FFFFFF"}
    >
      <AutoLayout
        direction={"horizontal"}
        horizontalAlignItems={"center"}
        verticalAlignItems={"center"}
        height={"hug-contents"}
        width={"hug-contents"}
        cornerRadius={0}
        spacing={120}
      >
        {boards}
      </AutoLayout>
      {endGameCondition.length > 0 && (
        <AutoLayout
          width={"fill-parent"}
          height={200}
          verticalAlignItems={"end"}
        >
          <AutoLayout
            direction={"horizontal"}
            horizontalAlignItems={"center"}
            verticalAlignItems={"center"}
            width={"fill-parent"}
            padding={40}
            cornerRadius={30}
            spacing={120}
            fill={"#78955B"}
          >
            <Text
              fontSize={70}
              fill={"#FFFFFF"}
              fontFamily={"Andada"}
            >
              {endGameCondition}
            </Text>
          </AutoLayout>
        </AutoLayout>
      )}
    </AutoLayout>
  )
}
widget.register(Chess)
