(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __pow = Math.pow;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // widget-src/chess960.js
  var require_chess960 = __commonJS({
    "widget-src/chess960.js"(exports) {
      var Chess4 = function(fen) {
        var BLACK = "b";
        var WHITE = "w";
        var EMPTY = -1;
        var PAWN = "p";
        var KNIGHT = "n";
        var BISHOP = "b";
        var ROOK = "r";
        var QUEEN = "q";
        var KING = "k";
        var SYMBOLS = "pnbrqkPNBRQK";
        var DEFAULT_POSITION = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
        var POSSIBLE_RESULTS = ["1-0", "0-1", "1/2-1/2", "*"];
        var PAWN_OFFSETS = {
          b: [16, 32, 17, 15],
          w: [-16, -32, -17, -15]
        };
        var PIECE_OFFSETS = {
          n: [-18, -33, -31, -14, 18, 33, 31, 14],
          b: [-17, -15, 17, 15],
          r: [-16, 1, 16, -1],
          q: [-17, -16, -15, 1, 17, 16, 15, -1],
          k: [-17, -16, -15, 1, 17, 16, 15, -1]
        };
        var ATTACKS = [
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          24,
          0,
          0,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          0,
          24,
          0,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          24,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          24,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          24,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          20,
          2,
          24,
          2,
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          53,
          56,
          53,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          24,
          24,
          24,
          24,
          24,
          24,
          56,
          0,
          56,
          24,
          24,
          24,
          24,
          24,
          24,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          53,
          56,
          53,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          20,
          2,
          24,
          2,
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          24,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          24,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          24,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          0,
          24,
          0,
          0,
          0,
          0,
          0,
          20,
          0,
          0,
          20,
          0,
          0,
          0,
          0,
          0,
          0,
          24,
          0,
          0,
          0,
          0,
          0,
          0,
          20
        ];
        var RAYS = [
          17,
          0,
          0,
          0,
          0,
          0,
          0,
          16,
          0,
          0,
          0,
          0,
          0,
          0,
          15,
          0,
          0,
          17,
          0,
          0,
          0,
          0,
          0,
          16,
          0,
          0,
          0,
          0,
          0,
          15,
          0,
          0,
          0,
          0,
          17,
          0,
          0,
          0,
          0,
          16,
          0,
          0,
          0,
          0,
          15,
          0,
          0,
          0,
          0,
          0,
          0,
          17,
          0,
          0,
          0,
          16,
          0,
          0,
          0,
          15,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          17,
          0,
          0,
          16,
          0,
          0,
          15,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          17,
          0,
          16,
          0,
          15,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          17,
          16,
          15,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          0,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          -15,
          -16,
          -17,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          -15,
          0,
          -16,
          0,
          -17,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          -15,
          0,
          0,
          -16,
          0,
          0,
          -17,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          -15,
          0,
          0,
          0,
          -16,
          0,
          0,
          0,
          -17,
          0,
          0,
          0,
          0,
          0,
          0,
          -15,
          0,
          0,
          0,
          0,
          -16,
          0,
          0,
          0,
          0,
          -17,
          0,
          0,
          0,
          0,
          -15,
          0,
          0,
          0,
          0,
          0,
          -16,
          0,
          0,
          0,
          0,
          0,
          -17,
          0,
          0,
          -15,
          0,
          0,
          0,
          0,
          0,
          0,
          -16,
          0,
          0,
          0,
          0,
          0,
          0,
          -17
        ];
        var SHIFTS = { p: 0, n: 1, b: 2, r: 3, q: 4, k: 5 };
        var FLAGS = {
          NORMAL: "n",
          CAPTURE: "c",
          BIG_PAWN: "b",
          EP_CAPTURE: "e",
          PROMOTION: "p",
          KSIDE_CASTLE: "k",
          QSIDE_CASTLE: "q"
        };
        var BITS = {
          NORMAL: 1,
          CAPTURE: 2,
          BIG_PAWN: 4,
          EP_CAPTURE: 8,
          PROMOTION: 16,
          KSIDE_CASTLE: 32,
          QSIDE_CASTLE: 64
        };
        var RANK_1 = 7;
        var RANK_2 = 6;
        var RANK_3 = 5;
        var RANK_4 = 4;
        var RANK_5 = 3;
        var RANK_6 = 2;
        var RANK_7 = 1;
        var RANK_8 = 0;
        var SQUARES = {
          a8: 0,
          b8: 1,
          c8: 2,
          d8: 3,
          e8: 4,
          f8: 5,
          g8: 6,
          h8: 7,
          a7: 16,
          b7: 17,
          c7: 18,
          d7: 19,
          e7: 20,
          f7: 21,
          g7: 22,
          h7: 23,
          a6: 32,
          b6: 33,
          c6: 34,
          d6: 35,
          e6: 36,
          f6: 37,
          g6: 38,
          h6: 39,
          a5: 48,
          b5: 49,
          c5: 50,
          d5: 51,
          e5: 52,
          f5: 53,
          g5: 54,
          h5: 55,
          a4: 64,
          b4: 65,
          c4: 66,
          d4: 67,
          e4: 68,
          f4: 69,
          g4: 70,
          h4: 71,
          a3: 80,
          b3: 81,
          c3: 82,
          d3: 83,
          e3: 84,
          f3: 85,
          g3: 86,
          h3: 87,
          a2: 96,
          b2: 97,
          c2: 98,
          d2: 99,
          e2: 100,
          f2: 101,
          g2: 102,
          h2: 103,
          a1: 112,
          b1: 113,
          c1: 114,
          d1: 115,
          e1: 116,
          f1: 117,
          g1: 118,
          h1: 119
        };
        var board = new Array(128);
        var kings = { w: EMPTY, b: EMPTY };
        var rooks = { w: [], b: [] };
        var turn = WHITE;
        var castling = { w: 0, b: 0 };
        var ep_square = EMPTY;
        var half_moves = 0;
        var move_number = 1;
        var history = [];
        var header = {};
        if (typeof fen === "undefined") {
          load(DEFAULT_POSITION);
        } else {
          load(fen);
        }
        function clear(keep_headers) {
          if (typeof keep_headers === "undefined") {
            keep_headers = false;
          }
          board = new Array(128);
          kings = { w: EMPTY, b: EMPTY };
          turn = WHITE;
          castling = { w: 0, b: 0 };
          ep_square = EMPTY;
          half_moves = 0;
          move_number = 1;
          history = [];
          if (!keep_headers)
            header = {};
          update_setup(generate_fen());
        }
        function reset() {
          load(DEFAULT_POSITION);
        }
        function load(fen2, keep_headers) {
          if (typeof keep_headers === "undefined") {
            keep_headers = false;
          }
          var tokens = fen2.split(/\s+/);
          var position = tokens[0];
          var square = 0;
          if (!validate_fen(fen2).valid) {
            return false;
          }
          clear(keep_headers);
          for (var i = 0; i < position.length; i++) {
            var piece = position.charAt(i);
            if (piece === "/") {
              square += 8;
            } else if (is_digit(piece)) {
              square += parseInt(piece, 10);
            } else {
              var color = piece < "a" ? WHITE : BLACK;
              put({ type: piece.toLowerCase(), color }, algebraic(square));
              square++;
            }
          }
          turn = tokens[1];
          rooks = { w: [], b: [] };
          if (tokens[2].indexOf("K") > -1) {
            castling.w |= BITS.KSIDE_CASTLE;
            for (var sq = SQUARES.h1; sq >= SQUARES.c1; --sq) {
              if (is_rook(board[sq], WHITE)) {
                rooks[WHITE].push({ square: sq, flag: BITS.KSIDE_CASTLE });
                break;
              }
            }
          }
          if (tokens[2].indexOf("Q") > -1) {
            castling.w |= BITS.QSIDE_CASTLE;
            for (var sq = SQUARES.a1; sq <= SQUARES.g1; ++sq) {
              if (is_rook(board[sq], WHITE)) {
                rooks[WHITE].push({ square: sq, flag: BITS.QSIDE_CASTLE });
                break;
              }
            }
          }
          var white_frc_columns = tokens[2].match(/[A-H]/g);
          var i, flag;
          if (white_frc_columns !== null) {
            for (i = 0; i < white_frc_columns.length; ++i) {
              var sq = SQUARES.a1 + (white_frc_columns[i].charCodeAt(0) - "A".charCodeAt(0));
              flag = sq < kings[WHITE] ? BITS.QSIDE_CASTLE : BITS.KSIDE_CASTLE;
              castling.w |= flag;
              rooks[WHITE].push({ square: sq, flag });
            }
          }
          if (tokens[2].indexOf("k") > -1) {
            castling.b |= BITS.KSIDE_CASTLE;
            for (var sq = SQUARES.h8; sq >= SQUARES.c8; --sq) {
              if (is_rook(board[sq], BLACK)) {
                rooks[BLACK].push({ square: sq, flag: BITS.KSIDE_CASTLE });
                break;
              }
            }
          }
          if (tokens[2].indexOf("q") > -1) {
            castling.b |= BITS.QSIDE_CASTLE;
            for (var sq = SQUARES.a8; sq <= SQUARES.g8; ++sq) {
              if (is_rook(board[sq], BLACK)) {
                rooks[BLACK].push({ square: sq, flag: BITS.QSIDE_CASTLE });
                break;
              }
            }
          }
          var black_frc_columns = tokens[2].match(/[a-h]/g);
          if (black_frc_columns !== null) {
            for (i = 0; i < black_frc_columns.length; ++i) {
              var sq = SQUARES.a8 + (black_frc_columns[i].charCodeAt(0) - "a".charCodeAt(0));
              flag = sq < kings[BLACK] ? BITS.QSIDE_CASTLE : BITS.KSIDE_CASTLE;
              castling.b |= flag;
              rooks[BLACK].push({ square: sq, flag });
            }
          }
          ep_square = tokens[3] === "-" ? EMPTY : SQUARES[tokens[3]];
          half_moves = parseInt(tokens[4], 10);
          move_number = parseInt(tokens[5], 10);
          update_setup(generate_fen());
          return true;
        }
        function validate_fen(fen2) {
          var errors = {
            0: "No errors.",
            1: "FEN string must contain six space-delimited fields.",
            2: "6th field (move number) must be a positive integer.",
            3: "5th field (half move counter) must be a non-negative integer.",
            4: "4th field (en-passant square) is invalid.",
            5: "3rd field (castling availability) is invalid.",
            6: "2nd field (side to move) is invalid.",
            7: "1st field (piece positions) does not contain 8 '/'-delimited rows.",
            8: "1st field (piece positions) is invalid [consecutive numbers].",
            9: "1st field (piece positions) is invalid [invalid piece].",
            10: "1st field (piece positions) is invalid [row too large].",
            11: "Illegal en-passant square"
          };
          var tokens = fen2.split(/\s+/);
          if (tokens.length !== 6) {
            return { valid: false, error_number: 1, error: errors[1] };
          }
          if (isNaN(tokens[5]) || parseInt(tokens[5], 10) <= 0) {
            return { valid: false, error_number: 2, error: errors[2] };
          }
          if (isNaN(tokens[4]) || parseInt(tokens[4], 10) < 0) {
            return { valid: false, error_number: 3, error: errors[3] };
          }
          if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
            return { valid: false, error_number: 4, error: errors[4] };
          }
          if (!/^[C-HK]?[A-FQ]?[c-hk]?[a-fq]?$/.test(tokens[2]) && tokens[2] !== "-") {
            return { valid: false, error_number: 5, error: errors[5] };
          }
          if (!/^(w|b)$/.test(tokens[1])) {
            return { valid: false, error_number: 6, error: errors[6] };
          }
          var rows = tokens[0].split("/");
          if (rows.length !== 8) {
            return { valid: false, error_number: 7, error: errors[7] };
          }
          for (var i = 0; i < rows.length; i++) {
            var sum_fields = 0;
            var previous_was_number = false;
            for (var k = 0; k < rows[i].length; k++) {
              if (!isNaN(rows[i][k])) {
                if (previous_was_number) {
                  return { valid: false, error_number: 8, error: errors[8] };
                }
                sum_fields += parseInt(rows[i][k], 10);
                previous_was_number = true;
              } else {
                if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
                  return { valid: false, error_number: 9, error: errors[9] };
                }
                sum_fields += 1;
                previous_was_number = false;
              }
            }
            if (sum_fields !== 8) {
              return { valid: false, error_number: 10, error: errors[10] };
            }
          }
          if (tokens[3][1] == "3" && tokens[1] == "w" || tokens[3][1] == "6" && tokens[1] == "b") {
            return { valid: false, error_number: 11, error: errors[11] };
          }
          return { valid: true, error_number: 0, error: errors[0] };
        }
        function generate_fen() {
          var empty = 0;
          var fen2 = "";
          for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
            if (board[i] == null) {
              empty++;
            } else {
              if (empty > 0) {
                fen2 += empty;
                empty = 0;
              }
              var color = board[i].color;
              var piece = board[i].type;
              fen2 += color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
            }
            if (i + 1 & 136) {
              if (empty > 0) {
                fen2 += empty;
              }
              if (i !== SQUARES.h1) {
                fen2 += "/";
              }
              empty = 0;
              i += 8;
            }
          }
          var cflags = "";
          var sq;
          if (castling[WHITE] & BITS.KSIDE_CASTLE) {
            sq = search_rook(board, WHITE, BITS.KSIDE_CASTLE);
            if (is_outermost_rook(board, WHITE, BITS.KSIDE_CASTLE, sq)) {
              cflags += "K";
            } else {
              cflags += "ABCDEFGH".substring(file(sq), file(sq) + 1);
            }
          }
          if (castling[WHITE] & BITS.QSIDE_CASTLE) {
            sq = search_rook(board, WHITE, BITS.QSIDE_CASTLE);
            if (is_outermost_rook(board, WHITE, BITS.QSIDE_CASTLE, sq)) {
              cflags += "Q";
            } else {
              cflags += "ABCDEFGH".substring(file(sq), file(sq) + 1);
            }
          }
          if (castling[BLACK] & BITS.KSIDE_CASTLE) {
            sq = search_rook(board, BLACK, BITS.KSIDE_CASTLE);
            if (is_outermost_rook(board, BLACK, BITS.KSIDE_CASTLE, sq)) {
              cflags += "k";
            } else {
              cflags += "abcdefgh".substring(file(sq), file(sq) + 1);
            }
          }
          if (castling[BLACK] & BITS.QSIDE_CASTLE) {
            sq = search_rook(board, BLACK, BITS.QSIDE_CASTLE);
            if (is_outermost_rook(board, BLACK, BITS.QSIDE_CASTLE, sq)) {
              cflags += "q";
            } else {
              cflags += "abcdefgh".substring(file(sq), file(sq) + 1);
            }
          }
          cflags = cflags || "-";
          var epflags = ep_square === EMPTY ? "-" : algebraic(ep_square);
          return [fen2, turn, cflags, epflags, half_moves, move_number].join(" ");
        }
        function set_header(args) {
          for (var i = 0; i < args.length; i += 2) {
            if (typeof args[i] === "string" && typeof args[i + 1] === "string") {
              header[args[i]] = args[i + 1];
            }
          }
          return header;
        }
        function update_setup(fen2) {
          if (history.length > 0)
            return;
          if (fen2 !== DEFAULT_POSITION) {
            header["SetUp"] = "1";
            header["FEN"] = fen2;
          } else {
            delete header["SetUp"];
            delete header["FEN"];
          }
        }
        function get(square) {
          var piece = board[SQUARES[square]];
          return piece ? { type: piece.type, color: piece.color } : null;
        }
        function put(piece, square) {
          if (!("type" in piece && "color" in piece)) {
            return false;
          }
          if (SYMBOLS.indexOf(piece.type.toLowerCase()) === -1) {
            return false;
          }
          if (!(square in SQUARES)) {
            return false;
          }
          var sq = SQUARES[square];
          if (piece.type == KING && !(kings[piece.color] == EMPTY || kings[piece.color] == sq)) {
            return false;
          }
          board[sq] = { type: piece.type, color: piece.color };
          if (piece.type === KING) {
            kings[piece.color] = sq;
          }
          update_setup(generate_fen());
          return true;
        }
        function remove(square) {
          var piece = get(square);
          board[SQUARES[square]] = null;
          if (piece && piece.type === KING) {
            kings[piece.color] = EMPTY;
          }
          update_setup(generate_fen());
          return piece;
        }
        function build_move(board2, from, to, flags, promotion, rook_sq) {
          var move = {
            color: turn,
            from,
            to,
            flags,
            piece: board2[from].type
          };
          if (promotion) {
            move.flags |= BITS.PROMOTION;
            move.promotion = promotion;
          }
          if (flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
            move.rook_sq = rook_sq;
          } else if (board2[to]) {
            move.captured = board2[to].type;
          } else if (flags & BITS.EP_CAPTURE) {
            move.captured = PAWN;
          }
          return move;
        }
        function generate_moves(options) {
          function add_move(board2, moves2, from, to, flags, rook_sq) {
            if (board2[from].type === PAWN && (rank(to) === RANK_8 || rank(to) === RANK_1)) {
              var pieces = [QUEEN, ROOK, BISHOP, KNIGHT];
              for (var i2 = 0, len2 = pieces.length; i2 < len2; i2++) {
                moves2.push(build_move(board2, from, to, flags, pieces[i2]));
              }
            } else {
              moves2.push(build_move(board2, from, to, flags, void 0, rook_sq));
            }
          }
          function check_castle(board2, king_from2, king_to2, rook_from2, rook_to2, them2) {
            var sq;
            var king_left = Math.min(king_from2, king_to2);
            var king_right = Math.max(king_from2, king_to2);
            var left = Math.min(king_left, Math.min(rook_from2, rook_to2));
            var right = Math.max(king_right, Math.max(rook_from2, rook_to2));
            for (sq = left; sq <= right; ++sq) {
              if (sq != king_from2 && sq != rook_from2 && board2[sq]) {
                return false;
              }
            }
            for (sq = king_left; sq <= king_right; ++sq) {
              if (attacked(them2, sq)) {
                return false;
              }
            }
            return true;
          }
          var moves = [];
          var us = turn;
          var them = swap_color(us);
          var second_rank = { b: RANK_7, w: RANK_2 };
          var first_sq = SQUARES.a8;
          var last_sq = SQUARES.h1;
          var single_square = false;
          var legal = typeof options !== "undefined" && "legal" in options ? options.legal : true;
          if (typeof options !== "undefined" && "square" in options) {
            if (options.square in SQUARES) {
              first_sq = last_sq = SQUARES[options.square];
              single_square = true;
            } else {
              return [];
            }
          }
          for (var i = first_sq; i <= last_sq; i++) {
            if (i & 136) {
              i += 7;
              continue;
            }
            var piece = board[i];
            if (piece == null || piece.color !== us) {
              continue;
            }
            if (piece.type === PAWN) {
              var square = i + PAWN_OFFSETS[us][0];
              if (board[square] == null) {
                add_move(board, moves, i, square, BITS.NORMAL);
                var square = i + PAWN_OFFSETS[us][1];
                if (second_rank[us] === rank(i) && board[square] == null) {
                  add_move(board, moves, i, square, BITS.BIG_PAWN);
                }
              }
              for (j = 2; j < 4; j++) {
                var square = i + PAWN_OFFSETS[us][j];
                if (square & 136)
                  continue;
                if (board[square] != null && board[square].color === them) {
                  add_move(board, moves, i, square, BITS.CAPTURE);
                } else if (square === ep_square) {
                  add_move(board, moves, i, ep_square, BITS.EP_CAPTURE);
                }
              }
            } else {
              for (var j = 0, len = PIECE_OFFSETS[piece.type].length; j < len; j++) {
                var offset = PIECE_OFFSETS[piece.type][j];
                var square = i;
                while (true) {
                  square += offset;
                  if (square & 136)
                    break;
                  if (board[square] == null) {
                    add_move(board, moves, i, square, BITS.NORMAL);
                  } else {
                    if (board[square].color === us)
                      break;
                    add_move(board, moves, i, square, BITS.CAPTURE);
                    break;
                  }
                  if (piece.type === "n" || piece.type === "k")
                    break;
                }
              }
            }
          }
          if (!single_square || last_sq === kings[us]) {
            if (castling[us] & BITS.KSIDE_CASTLE) {
              var king_from = kings[us];
              var king_to = us === WHITE ? SQUARES.g1 : SQUARES.g8;
              var rook_from = search_rook(board, us, BITS.KSIDE_CASTLE);
              var rook_to = king_to - 1;
              if (check_castle(board, king_from, king_to, rook_from, rook_to, them)) {
                add_move(board, moves, king_from, king_to, BITS.KSIDE_CASTLE, rook_from);
              }
            }
            if (castling[us] & BITS.QSIDE_CASTLE) {
              var king_from = kings[us];
              var king_to = us === WHITE ? SQUARES.c1 : SQUARES.c8;
              var rook_from = search_rook(board, us, BITS.QSIDE_CASTLE);
              var rook_to = king_to + 1;
              if (check_castle(board, king_from, king_to, rook_from, rook_to, them)) {
                add_move(board, moves, king_from, king_to, BITS.QSIDE_CASTLE, rook_from);
              }
            }
          }
          if (!legal) {
            return moves;
          }
          var legal_moves = [];
          for (var i = 0, len = moves.length; i < len; i++) {
            make_move(moves[i]);
            if (!king_attacked(us)) {
              legal_moves.push(moves[i]);
            }
            undo_move();
          }
          return legal_moves;
        }
        function is_rook(piece, color) {
          return typeof piece !== "undefined" && piece !== null && piece.type === ROOK && piece.color == color;
        }
        function search_rook(board2, us, flag) {
          for (var i = 0, len = rooks[us].length; i < len; i++) {
            if (flag & rooks[us][i].flag) {
              return rooks[us][i].square;
            }
          }
          return null;
        }
        function is_outermost_rook(board2, us, flag, sq) {
          var end_sq;
          if (flag == BITS.KSIDE_CASTLE) {
            var end_sq = us == WHITE ? SQUARES.h1 : SQUARES.h8;
            while (++sq <= end_sq) {
              if (is_rook(board2[sq], us)) {
                return false;
              }
            }
          } else {
            var end_sq = us == WHITE ? SQUARES.a1 : SQUARES.a8;
            while (--sq >= end_sq) {
              if (is_rook(board2[sq], us)) {
                return false;
              }
            }
          }
          return true;
        }
        function move_to_san(move, sloppy) {
          var output = "";
          if (move.flags & BITS.KSIDE_CASTLE) {
            output = "O-O";
          } else if (move.flags & BITS.QSIDE_CASTLE) {
            output = "O-O-O";
          } else {
            var disambiguator = get_disambiguator(move, sloppy);
            if (move.piece !== PAWN) {
              output += move.piece.toUpperCase() + disambiguator;
            }
            if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
              if (move.piece === PAWN) {
                output += algebraic(move.from)[0];
              }
              output += "x";
            }
            output += algebraic(move.to);
            if (move.flags & BITS.PROMOTION) {
              output += "=" + move.promotion.toUpperCase();
            }
          }
          make_move(move);
          if (in_check()) {
            if (in_checkmate()) {
              output += "#";
            } else {
              output += "+";
            }
          }
          undo_move();
          return output;
        }
        function stripped_san(move) {
          return move.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
        }
        function attacked(color, square) {
          for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
            if (i & 136) {
              i += 7;
              continue;
            }
            if (board[i] == null || board[i].color !== color)
              continue;
            var piece = board[i];
            var difference = i - square;
            var index = difference + 119;
            if (ATTACKS[index] & 1 << SHIFTS[piece.type]) {
              if (piece.type === PAWN) {
                if (difference > 0) {
                  if (piece.color === WHITE)
                    return true;
                } else {
                  if (piece.color === BLACK)
                    return true;
                }
                continue;
              }
              if (piece.type === "n" || piece.type === "k")
                return true;
              var offset = RAYS[index];
              var j = i + offset;
              var blocked = false;
              while (j !== square) {
                if (board[j] != null) {
                  blocked = true;
                  break;
                }
                j += offset;
              }
              if (!blocked)
                return true;
            }
          }
          return false;
        }
        function king_attacked(color) {
          return attacked(swap_color(color), kings[color]);
        }
        function in_check() {
          return king_attacked(turn);
        }
        function in_checkmate() {
          return in_check() && generate_moves().length === 0;
        }
        function in_stalemate() {
          return !in_check() && generate_moves().length === 0;
        }
        function insufficient_material() {
          var pieces = {};
          var bishops = [];
          var num_pieces = 0;
          var sq_color = 0;
          for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
            sq_color = (sq_color + 1) % 2;
            if (i & 136) {
              i += 7;
              continue;
            }
            var piece = board[i];
            if (piece) {
              pieces[piece.type] = piece.type in pieces ? pieces[piece.type] + 1 : 1;
              if (piece.type === BISHOP) {
                bishops.push(sq_color);
              }
              num_pieces++;
            }
          }
          if (num_pieces === 2) {
            return true;
          } else if (num_pieces === 3 && (pieces[BISHOP] === 1 || pieces[KNIGHT] === 1)) {
            return true;
          } else if (num_pieces === pieces[BISHOP] + 2) {
            var sum = 0;
            var len = bishops.length;
            for (var i = 0; i < len; i++) {
              sum += bishops[i];
            }
            if (sum === 0 || sum === len) {
              return true;
            }
          }
          return false;
        }
        function in_threefold_repetition() {
          var moves = [];
          var positions = {};
          var repetition = false;
          while (true) {
            var move = undo_move();
            if (!move)
              break;
            moves.push(move);
          }
          while (true) {
            var fen2 = generate_fen().split(" ").slice(0, 4).join(" ");
            positions[fen2] = fen2 in positions ? positions[fen2] + 1 : 1;
            if (positions[fen2] >= 3) {
              repetition = true;
            }
            if (!moves.length) {
              break;
            }
            make_move(moves.pop());
          }
          return repetition;
        }
        function push(move) {
          history.push({
            move,
            kings: { b: kings.b, w: kings.w },
            turn,
            castling: { b: castling.b, w: castling.w },
            ep_square,
            half_moves,
            move_number
          });
        }
        function make_move(move) {
          var us = turn;
          var them = swap_color(us);
          push(move);
          board[move.to] = board[move.from];
          if (move.from != move.to) {
            board[move.from] = null;
          }
          if (move.flags & BITS.EP_CAPTURE) {
            if (turn === BLACK) {
              board[move.to - 16] = null;
            } else {
              board[move.to + 16] = null;
            }
          }
          if (move.flags & BITS.PROMOTION) {
            board[move.to] = { type: move.promotion, color: us };
          }
          if (board[move.to].type === KING) {
            kings[board[move.to].color] = move.to;
            if (move.flags & BITS.KSIDE_CASTLE) {
              var castling_to = move.to - 1;
              var castling_from = move.rook_sq;
              board[castling_to] = { type: ROOK, color: us };
              if (castling_from !== move.to && castling_from !== castling_to)
                board[castling_from] = null;
            } else if (move.flags & BITS.QSIDE_CASTLE) {
              var castling_to = move.to + 1;
              var castling_from = move.rook_sq;
              board[castling_to] = { type: ROOK, color: us };
              if (castling_from !== move.to && castling_from !== castling_to)
                board[castling_from] = null;
            }
            castling[us] = "";
          }
          if (castling[us]) {
            for (var i = 0, len = rooks[us].length; i < len; i++) {
              if (move.from === rooks[us][i].square && castling[us] & rooks[us][i].flag) {
                castling[us] ^= rooks[us][i].flag;
                break;
              }
            }
          }
          if (castling[them]) {
            for (var i = 0, len = rooks[them].length; i < len; i++) {
              if (move.to === rooks[them][i].square && castling[them] & rooks[them][i].flag) {
                castling[them] ^= rooks[them][i].flag;
                break;
              }
            }
          }
          if (move.flags & BITS.BIG_PAWN) {
            if (turn === "b") {
              ep_square = move.to - 16;
            } else {
              ep_square = move.to + 16;
            }
          } else {
            ep_square = EMPTY;
          }
          if (move.piece === PAWN) {
            half_moves = 0;
          } else if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
            half_moves = 0;
          } else {
            half_moves++;
          }
          if (turn === BLACK) {
            move_number++;
          }
          turn = swap_color(turn);
        }
        function undo_move() {
          var old = history.pop();
          if (old == null) {
            return null;
          }
          var move = old.move;
          kings = old.kings;
          turn = old.turn;
          castling = old.castling;
          ep_square = old.ep_square;
          half_moves = old.half_moves;
          move_number = old.move_number;
          var us = turn;
          var them = swap_color(turn);
          if (move.from != move.to) {
            board[move.from] = board[move.to];
            board[move.from].type = move.piece;
            board[move.to] = null;
          }
          if (move.flags & BITS.CAPTURE) {
            board[move.to] = { type: move.captured, color: them };
          } else if (move.flags & BITS.EP_CAPTURE) {
            var index;
            if (us === BLACK) {
              index = move.to - 16;
            } else {
              index = move.to + 16;
            }
            board[index] = { type: PAWN, color: them };
          }
          if (move.flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
            var castling_to, castling_from;
            if (move.flags & BITS.KSIDE_CASTLE) {
              castling_to = move.rook_sq;
              castling_from = move.to - 1;
            } else if (move.flags & BITS.QSIDE_CASTLE) {
              castling_to = move.rook_sq;
              castling_from = move.to + 1;
            }
            board[castling_to] = { type: ROOK, color: us };
            if (castling_from !== move.from && castling_from !== castling_to)
              board[castling_from] = null;
          }
          return move;
        }
        function get_disambiguator(move, sloppy) {
          var moves = generate_moves({ legal: !sloppy });
          var from = move.from;
          var to = move.to;
          var piece = move.piece;
          var ambiguities = 0;
          var same_rank = 0;
          var same_file = 0;
          for (var i = 0, len = moves.length; i < len; i++) {
            var ambig_from = moves[i].from;
            var ambig_to = moves[i].to;
            var ambig_piece = moves[i].piece;
            if (piece === ambig_piece && from !== ambig_from && to === ambig_to) {
              ambiguities++;
              if (rank(from) === rank(ambig_from)) {
                same_rank++;
              }
              if (file(from) === file(ambig_from)) {
                same_file++;
              }
            }
          }
          if (ambiguities > 0) {
            if (same_rank > 0 && same_file > 0) {
              return algebraic(from);
            } else if (same_file > 0) {
              return algebraic(from).charAt(1);
            } else {
              return algebraic(from).charAt(0);
            }
          }
          return "";
        }
        function ascii() {
          var s = "   +------------------------+\n";
          for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
            if (file(i) === 0) {
              s += " " + "87654321"[rank(i)] + " |";
            }
            if (board[i] == null) {
              s += " . ";
            } else {
              var piece = board[i].type;
              var color = board[i].color;
              var symbol = color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
              s += " " + symbol + " ";
            }
            if (i + 1 & 136) {
              s += "|\n";
              i += 8;
            }
          }
          s += "   +------------------------+\n";
          s += "     a  b  c  d  e  f  g  h\n";
          return s;
        }
        function move_from_san(move, sloppy) {
          var clean_move = stripped_san(move);
          if (sloppy) {
            var matches = clean_move.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);
            if (matches) {
              var piece = matches[1];
              var from = matches[2];
              var to = matches[3];
              var promotion = matches[4];
            }
          }
          var moves = generate_moves();
          for (var i = 0, len = moves.length; i < len; i++) {
            if (clean_move === stripped_san(move_to_san(moves[i])) || sloppy && clean_move === stripped_san(move_to_san(moves[i], true))) {
              return moves[i];
            } else {
              if (matches && (!piece || piece.toLowerCase() == moves[i].piece) && SQUARES[from] == moves[i].from && SQUARES[to] == moves[i].to && (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
                return moves[i];
              }
            }
          }
          return null;
        }
        function rank(i) {
          return i >> 4;
        }
        function file(i) {
          return i & 15;
        }
        function algebraic(i) {
          var f = file(i), r = rank(i);
          return "abcdefgh".substring(f, f + 1) + "87654321".substring(r, r + 1);
        }
        function swap_color(c) {
          return c === WHITE ? BLACK : WHITE;
        }
        function is_digit(c) {
          return "0123456789".indexOf(c) !== -1;
        }
        function make_pretty(ugly_move) {
          var move = clone(ugly_move);
          move.san = move_to_san(move, false);
          move.to = algebraic(move.to);
          move.from = algebraic(move.from);
          var flags = "";
          for (var flag in BITS) {
            if (BITS[flag] & move.flags) {
              flags += FLAGS[flag];
            }
          }
          move.flags = flags;
          return move;
        }
        function clone(obj) {
          var dupe = obj instanceof Array ? [] : {};
          for (var property in obj) {
            if (typeof property === "object") {
              dupe[property] = clone(obj[property]);
            } else {
              dupe[property] = obj[property];
            }
          }
          return dupe;
        }
        function trim(str) {
          return str.replace(/^\s+|\s+$/g, "");
        }
        function perft(depth) {
          var moves = generate_moves({ legal: false });
          var nodes = 0;
          var color = turn;
          for (var i = 0, len = moves.length; i < len; i++) {
            make_move(moves[i]);
            if (!king_attacked(color)) {
              if (depth - 1 > 0) {
                var child_nodes = perft(depth - 1);
                nodes += child_nodes;
              } else {
                nodes++;
              }
            }
            undo_move();
          }
          return nodes;
        }
        return {
          WHITE,
          BLACK,
          PAWN,
          KNIGHT,
          BISHOP,
          ROOK,
          QUEEN,
          KING,
          SQUARES: function() {
            var keys = [];
            for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
              if (i & 136) {
                i += 7;
                continue;
              }
              keys.push(algebraic(i));
            }
            return keys;
          }(),
          FLAGS,
          load: function(fen2) {
            return load(fen2);
          },
          reset: function() {
            return reset();
          },
          moves: function(options) {
            var ugly_moves = generate_moves(options);
            var moves = [];
            for (var i = 0, len = ugly_moves.length; i < len; i++) {
              if (typeof options !== "undefined" && "verbose" in options && options.verbose) {
                moves.push(make_pretty(ugly_moves[i]));
              } else {
                moves.push(move_to_san(ugly_moves[i], false));
              }
            }
            return moves;
          },
          in_check: function() {
            return in_check();
          },
          in_checkmate: function() {
            return in_checkmate();
          },
          in_stalemate: function() {
            return in_stalemate();
          },
          in_draw: function() {
            return half_moves >= 100 || in_stalemate() || insufficient_material() || in_threefold_repetition();
          },
          insufficient_material: function() {
            return insufficient_material();
          },
          in_threefold_repetition: function() {
            return in_threefold_repetition();
          },
          game_over: function() {
            return half_moves >= 100 || in_checkmate() || in_stalemate() || insufficient_material() || in_threefold_repetition();
          },
          validate_fen: function(fen2) {
            return validate_fen(fen2);
          },
          fen: function() {
            return generate_fen();
          },
          board: function() {
            var output = [], row = [];
            for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
              if (board[i] == null) {
                row.push(null);
              } else {
                row.push({ type: board[i].type, color: board[i].color });
              }
              if (i + 1 & 136) {
                output.push(row);
                row = [];
                i += 8;
              }
            }
            return output;
          },
          pgn: function(options) {
            var newline = typeof options === "object" && typeof options.newline_char === "string" ? options.newline_char : "\n";
            var max_width = typeof options === "object" && typeof options.max_width === "number" ? options.max_width : 0;
            var result = [];
            var header_exists = false;
            for (var i in header) {
              result.push("[" + i + ' "' + header[i] + '"]' + newline);
              header_exists = true;
            }
            if (header_exists && history.length) {
              result.push(newline);
            }
            var reversed_history = [];
            while (history.length > 0) {
              reversed_history.push(undo_move());
            }
            var moves = [];
            var move_string = "";
            while (reversed_history.length > 0) {
              var move = reversed_history.pop();
              if (!history.length && move.color === "b") {
                move_string = move_number + ". ...";
              } else if (move.color === "w") {
                if (move_string.length) {
                  moves.push(move_string);
                }
                move_string = move_number + ".";
              }
              move_string = move_string + " " + move_to_san(move, false);
              make_move(move);
            }
            if (move_string.length) {
              moves.push(move_string);
            }
            if (typeof header.Result !== "undefined") {
              moves.push(header.Result);
            }
            if (max_width === 0) {
              return result.join("") + moves.join(" ");
            }
            var current_width = 0;
            for (var i = 0; i < moves.length; i++) {
              if (current_width + moves[i].length > max_width && i !== 0) {
                if (result[result.length - 1] === " ") {
                  result.pop();
                }
                result.push(newline);
                current_width = 0;
              } else if (i !== 0) {
                result.push(" ");
                current_width++;
              }
              result.push(moves[i]);
              current_width += moves[i].length;
            }
            return result.join("");
          },
          load_pgn: function(pgn, options) {
            var sloppy = typeof options !== "undefined" && "sloppy" in options ? options.sloppy : false;
            function mask(str) {
              return str.replace(/\\/g, "\\");
            }
            function has_keys(object) {
              for (var key2 in object) {
                return true;
              }
              return false;
            }
            function parse_pgn_header(header2, options2) {
              var newline_char2 = typeof options2 === "object" && typeof options2.newline_char === "string" ? options2.newline_char : "\r?\n";
              var header_obj = {};
              var headers2 = header2.split(new RegExp(mask(newline_char2)));
              var key2 = "";
              var value = "";
              for (var i = 0; i < headers2.length; i++) {
                key2 = headers2[i].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/, "$1");
                value = headers2[i].replace(/^\[[A-Za-z]+\s"(.*)"\]$/, "$1");
                if (trim(key2).length > 0) {
                  header_obj[key2] = value;
                }
              }
              return header_obj;
            }
            var newline_char = typeof options === "object" && typeof options.newline_char === "string" ? options.newline_char : "\r?\n";
            var regex = new RegExp("^(\\[(.|" + mask(newline_char) + ")*\\])(" + mask(newline_char) + ")*1.(" + mask(newline_char) + "|.)*$", "g");
            var header_string = pgn.replace(regex, "$1");
            if (header_string[0] !== "[") {
              header_string = "";
            }
            reset();
            var headers = parse_pgn_header(header_string, options);
            for (var key in headers) {
              set_header([key, headers[key]]);
            }
            if (headers["SetUp"] === "1") {
              if (!("FEN" in headers && load(headers["FEN"], true))) {
                return false;
              }
            }
            var ms = pgn.replace(header_string, "").replace(new RegExp(mask(newline_char), "g"), " ");
            ms = ms.replace(/(\{[^}]+\})+?/g, "");
            var rav_regex = /(\([^\(\)]+\))+?/g;
            while (rav_regex.test(ms)) {
              ms = ms.replace(rav_regex, "");
            }
            ms = ms.replace(/\d+\.(\.\.)?/g, "");
            ms = ms.replace(/\.\.\./g, "");
            ms = ms.replace(/\$\d+/g, "");
            var moves = trim(ms).split(new RegExp(/\s+/));
            moves = moves.join(",").replace(/,,+/g, ",").split(",");
            var move = "";
            for (var half_move = 0; half_move < moves.length - 1; half_move++) {
              move = move_from_san(moves[half_move], sloppy);
              if (move == null) {
                return false;
              } else {
                make_move(move);
              }
            }
            move = moves[moves.length - 1];
            if (POSSIBLE_RESULTS.indexOf(move) > -1) {
              if (has_keys(header) && typeof header.Result === "undefined") {
                set_header(["Result", move]);
              }
            } else {
              move = move_from_san(move, sloppy);
              if (move == null) {
                return false;
              } else {
                make_move(move);
              }
            }
            return true;
          },
          header: function() {
            return set_header(arguments);
          },
          ascii: function() {
            return ascii();
          },
          turn: function() {
            return turn;
          },
          move: function(move, options) {
            var sloppy = typeof options !== "undefined" && "sloppy" in options ? options.sloppy : false;
            var move_obj = null;
            if (typeof move === "string") {
              move_obj = move_from_san(move, sloppy);
            } else if (typeof move === "object") {
              var moves = generate_moves();
              for (var i = 0, len = moves.length; i < len; i++) {
                if (move.from === algebraic(moves[i].from) && move.to === algebraic(moves[i].to) && (!("promotion" in moves[i]) || move.promotion === moves[i].promotion)) {
                  move_obj = moves[i];
                  break;
                }
              }
            }
            if (!move_obj) {
              return null;
            }
            var pretty_move = make_pretty(move_obj);
            make_move(move_obj);
            return pretty_move;
          },
          undo: function() {
            var move = undo_move();
            return move ? make_pretty(move) : null;
          },
          clear: function() {
            return clear();
          },
          put: function(piece, square) {
            return put(piece, square);
          },
          get: function(square) {
            return get(square);
          },
          remove: function(square) {
            return remove(square);
          },
          perft: function(depth) {
            return perft(depth);
          },
          square_color: function(square) {
            if (square in SQUARES) {
              var sq_0x88 = SQUARES[square];
              return (rank(sq_0x88) + file(sq_0x88)) % 2 === 0 ? "light" : "dark";
            }
            return null;
          },
          history: function(options) {
            var reversed_history = [];
            var move_history = [];
            var verbose = typeof options !== "undefined" && "verbose" in options && options.verbose;
            while (history.length > 0) {
              reversed_history.push(undo_move());
            }
            while (reversed_history.length > 0) {
              var move = reversed_history.pop();
              if (verbose) {
                move_history.push(make_pretty(move));
              } else {
                move_history.push(move_to_san(move));
              }
              make_move(move);
            }
            return move_history;
          }
        };
      };
      if (typeof exports !== "undefined")
        exports.Chess = Chess4;
      if (typeof define !== "undefined")
        define(function() {
          return Chess4;
        });
    }
  });

  // widget-src/chess.js
  var Chess = function(fen) {
    var BLACK = "b";
    var WHITE = "w";
    var EMPTY = -1;
    var PAWN = "p";
    var KNIGHT = "n";
    var BISHOP = "b";
    var ROOK = "r";
    var QUEEN = "q";
    var KING = "k";
    var SYMBOLS = "pnbrqkPNBRQK";
    var DEFAULT_POSITION = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
    var TERMINATION_MARKERS = ["1-0", "0-1", "1/2-1/2", "*"];
    var PAWN_OFFSETS = {
      b: [16, 32, 17, 15],
      w: [-16, -32, -17, -15]
    };
    var PIECE_OFFSETS = {
      n: [-18, -33, -31, -14, 18, 33, 31, 14],
      b: [-17, -15, 17, 15],
      r: [-16, 1, 16, -1],
      q: [-17, -16, -15, 1, 17, 16, 15, -1],
      k: [-17, -16, -15, 1, 17, 16, 15, -1]
    };
    var ATTACKS = [
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      24,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      20,
      2,
      24,
      2,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      53,
      56,
      53,
      2,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      24,
      24,
      24,
      24,
      24,
      56,
      0,
      56,
      24,
      24,
      24,
      24,
      24,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      53,
      56,
      53,
      2,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      20,
      2,
      24,
      2,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      24,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      20
    ];
    var RAYS = [
      17,
      0,
      0,
      0,
      0,
      0,
      0,
      16,
      0,
      0,
      0,
      0,
      0,
      0,
      15,
      0,
      0,
      17,
      0,
      0,
      0,
      0,
      0,
      16,
      0,
      0,
      0,
      0,
      0,
      15,
      0,
      0,
      0,
      0,
      17,
      0,
      0,
      0,
      0,
      16,
      0,
      0,
      0,
      0,
      15,
      0,
      0,
      0,
      0,
      0,
      0,
      17,
      0,
      0,
      0,
      16,
      0,
      0,
      0,
      15,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      17,
      0,
      0,
      16,
      0,
      0,
      15,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      17,
      0,
      16,
      0,
      15,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      17,
      16,
      15,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      -15,
      -16,
      -17,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      -15,
      0,
      -16,
      0,
      -17,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      -15,
      0,
      0,
      -16,
      0,
      0,
      -17,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      -15,
      0,
      0,
      0,
      -16,
      0,
      0,
      0,
      -17,
      0,
      0,
      0,
      0,
      0,
      0,
      -15,
      0,
      0,
      0,
      0,
      -16,
      0,
      0,
      0,
      0,
      -17,
      0,
      0,
      0,
      0,
      -15,
      0,
      0,
      0,
      0,
      0,
      -16,
      0,
      0,
      0,
      0,
      0,
      -17,
      0,
      0,
      -15,
      0,
      0,
      0,
      0,
      0,
      0,
      -16,
      0,
      0,
      0,
      0,
      0,
      0,
      -17
    ];
    var SHIFTS = { p: 0, n: 1, b: 2, r: 3, q: 4, k: 5 };
    var FLAGS = {
      NORMAL: "n",
      CAPTURE: "c",
      BIG_PAWN: "b",
      EP_CAPTURE: "e",
      PROMOTION: "p",
      KSIDE_CASTLE: "k",
      QSIDE_CASTLE: "q"
    };
    var BITS = {
      NORMAL: 1,
      CAPTURE: 2,
      BIG_PAWN: 4,
      EP_CAPTURE: 8,
      PROMOTION: 16,
      KSIDE_CASTLE: 32,
      QSIDE_CASTLE: 64
    };
    var RANK_1 = 7;
    var RANK_2 = 6;
    var RANK_3 = 5;
    var RANK_4 = 4;
    var RANK_5 = 3;
    var RANK_6 = 2;
    var RANK_7 = 1;
    var RANK_8 = 0;
    var SQUARES = {
      a8: 0,
      b8: 1,
      c8: 2,
      d8: 3,
      e8: 4,
      f8: 5,
      g8: 6,
      h8: 7,
      a7: 16,
      b7: 17,
      c7: 18,
      d7: 19,
      e7: 20,
      f7: 21,
      g7: 22,
      h7: 23,
      a6: 32,
      b6: 33,
      c6: 34,
      d6: 35,
      e6: 36,
      f6: 37,
      g6: 38,
      h6: 39,
      a5: 48,
      b5: 49,
      c5: 50,
      d5: 51,
      e5: 52,
      f5: 53,
      g5: 54,
      h5: 55,
      a4: 64,
      b4: 65,
      c4: 66,
      d4: 67,
      e4: 68,
      f4: 69,
      g4: 70,
      h4: 71,
      a3: 80,
      b3: 81,
      c3: 82,
      d3: 83,
      e3: 84,
      f3: 85,
      g3: 86,
      h3: 87,
      a2: 96,
      b2: 97,
      c2: 98,
      d2: 99,
      e2: 100,
      f2: 101,
      g2: 102,
      h2: 103,
      a1: 112,
      b1: 113,
      c1: 114,
      d1: 115,
      e1: 116,
      f1: 117,
      g1: 118,
      h1: 119
    };
    var ROOKS = {
      w: [
        { square: SQUARES.a1, flag: BITS.QSIDE_CASTLE },
        { square: SQUARES.h1, flag: BITS.KSIDE_CASTLE }
      ],
      b: [
        { square: SQUARES.a8, flag: BITS.QSIDE_CASTLE },
        { square: SQUARES.h8, flag: BITS.KSIDE_CASTLE }
      ]
    };
    var board = new Array(128);
    var kings = { w: EMPTY, b: EMPTY };
    var turn = WHITE;
    var castling = { w: 0, b: 0 };
    var ep_square = EMPTY;
    var half_moves = 0;
    var move_number = 1;
    var history = [];
    var header = {};
    var comments = {};
    if (typeof fen === "undefined") {
      load(DEFAULT_POSITION);
    } else {
      load(fen);
    }
    function clear(keep_headers) {
      if (typeof keep_headers === "undefined") {
        keep_headers = false;
      }
      board = new Array(128);
      kings = { w: EMPTY, b: EMPTY };
      turn = WHITE;
      castling = { w: 0, b: 0 };
      ep_square = EMPTY;
      half_moves = 0;
      move_number = 1;
      history = [];
      if (!keep_headers)
        header = {};
      comments = {};
      update_setup(generate_fen());
    }
    function prune_comments() {
      var reversed_history = [];
      var current_comments = {};
      var copy_comment = function(fen2) {
        if (fen2 in comments) {
          current_comments[fen2] = comments[fen2];
        }
      };
      while (history.length > 0) {
        reversed_history.push(undo_move());
      }
      copy_comment(generate_fen());
      while (reversed_history.length > 0) {
        make_move(reversed_history.pop());
        copy_comment(generate_fen());
      }
      comments = current_comments;
    }
    function reset() {
      load(DEFAULT_POSITION);
    }
    function load(fen2, keep_headers) {
      if (typeof keep_headers === "undefined") {
        keep_headers = false;
      }
      var tokens = fen2.split(/\s+/);
      var position = tokens[0];
      var square = 0;
      if (!validate_fen(fen2).valid) {
        return false;
      }
      clear(keep_headers);
      for (var i = 0; i < position.length; i++) {
        var piece = position.charAt(i);
        if (piece === "/") {
          square += 8;
        } else if (is_digit(piece)) {
          square += parseInt(piece, 10);
        } else {
          var color = piece < "a" ? WHITE : BLACK;
          put({ type: piece.toLowerCase(), color }, algebraic(square));
          square++;
        }
      }
      turn = tokens[1];
      if (tokens[2].indexOf("K") > -1) {
        castling.w |= BITS.KSIDE_CASTLE;
      }
      if (tokens[2].indexOf("Q") > -1) {
        castling.w |= BITS.QSIDE_CASTLE;
      }
      if (tokens[2].indexOf("k") > -1) {
        castling.b |= BITS.KSIDE_CASTLE;
      }
      if (tokens[2].indexOf("q") > -1) {
        castling.b |= BITS.QSIDE_CASTLE;
      }
      ep_square = tokens[3] === "-" ? EMPTY : SQUARES[tokens[3]];
      half_moves = parseInt(tokens[4], 10);
      move_number = parseInt(tokens[5], 10);
      update_setup(generate_fen());
      return true;
    }
    function validate_fen(fen2) {
      var errors = {
        0: "No errors.",
        1: "FEN string must contain six space-delimited fields.",
        2: "6th field (move number) must be a positive integer.",
        3: "5th field (half move counter) must be a non-negative integer.",
        4: "4th field (en-passant square) is invalid.",
        5: "3rd field (castling availability) is invalid.",
        6: "2nd field (side to move) is invalid.",
        7: "1st field (piece positions) does not contain 8 '/'-delimited rows.",
        8: "1st field (piece positions) is invalid [consecutive numbers].",
        9: "1st field (piece positions) is invalid [invalid piece].",
        10: "1st field (piece positions) is invalid [row too large].",
        11: "Illegal en-passant square"
      };
      var tokens = fen2.split(/\s+/);
      if (tokens.length !== 6) {
        return { valid: false, error_number: 1, error: errors[1] };
      }
      if (isNaN(tokens[5]) || parseInt(tokens[5], 10) <= 0) {
        return { valid: false, error_number: 2, error: errors[2] };
      }
      if (isNaN(tokens[4]) || parseInt(tokens[4], 10) < 0) {
        return { valid: false, error_number: 3, error: errors[3] };
      }
      if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
        return { valid: false, error_number: 4, error: errors[4] };
      }
      if (!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(tokens[2])) {
        return { valid: false, error_number: 5, error: errors[5] };
      }
      if (!/^(w|b)$/.test(tokens[1])) {
        return { valid: false, error_number: 6, error: errors[6] };
      }
      var rows = tokens[0].split("/");
      if (rows.length !== 8) {
        return { valid: false, error_number: 7, error: errors[7] };
      }
      for (var i = 0; i < rows.length; i++) {
        var sum_fields = 0;
        var previous_was_number = false;
        for (var k = 0; k < rows[i].length; k++) {
          if (!isNaN(rows[i][k])) {
            if (previous_was_number) {
              return { valid: false, error_number: 8, error: errors[8] };
            }
            sum_fields += parseInt(rows[i][k], 10);
            previous_was_number = true;
          } else {
            if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
              return { valid: false, error_number: 9, error: errors[9] };
            }
            sum_fields += 1;
            previous_was_number = false;
          }
        }
        if (sum_fields !== 8) {
          return { valid: false, error_number: 10, error: errors[10] };
        }
      }
      if (tokens[3][1] == "3" && tokens[1] == "w" || tokens[3][1] == "6" && tokens[1] == "b") {
        return { valid: false, error_number: 11, error: errors[11] };
      }
      return { valid: true, error_number: 0, error: errors[0] };
    }
    function generate_fen() {
      var empty = 0;
      var fen2 = "";
      for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
        if (board[i] == null) {
          empty++;
        } else {
          if (empty > 0) {
            fen2 += empty;
            empty = 0;
          }
          var color = board[i].color;
          var piece = board[i].type;
          fen2 += color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
        }
        if (i + 1 & 136) {
          if (empty > 0) {
            fen2 += empty;
          }
          if (i !== SQUARES.h1) {
            fen2 += "/";
          }
          empty = 0;
          i += 8;
        }
      }
      var cflags = "";
      if (castling[WHITE] & BITS.KSIDE_CASTLE) {
        cflags += "K";
      }
      if (castling[WHITE] & BITS.QSIDE_CASTLE) {
        cflags += "Q";
      }
      if (castling[BLACK] & BITS.KSIDE_CASTLE) {
        cflags += "k";
      }
      if (castling[BLACK] & BITS.QSIDE_CASTLE) {
        cflags += "q";
      }
      cflags = cflags || "-";
      var epflags = ep_square === EMPTY ? "-" : algebraic(ep_square);
      return [fen2, turn, cflags, epflags, half_moves, move_number].join(" ");
    }
    function set_header(args) {
      for (var i = 0; i < args.length; i += 2) {
        if (typeof args[i] === "string" && typeof args[i + 1] === "string") {
          header[args[i]] = args[i + 1];
        }
      }
      return header;
    }
    function update_setup(fen2) {
      if (history.length > 0)
        return;
      if (fen2 !== DEFAULT_POSITION) {
        header["SetUp"] = "1";
        header["FEN"] = fen2;
      } else {
        delete header["SetUp"];
        delete header["FEN"];
      }
    }
    function get(square) {
      var piece = board[SQUARES[square]];
      return piece ? { type: piece.type, color: piece.color } : null;
    }
    function put(piece, square) {
      if (!("type" in piece && "color" in piece)) {
        return false;
      }
      if (SYMBOLS.indexOf(piece.type.toLowerCase()) === -1) {
        return false;
      }
      if (!(square in SQUARES)) {
        return false;
      }
      var sq = SQUARES[square];
      if (piece.type == KING && !(kings[piece.color] == EMPTY || kings[piece.color] == sq)) {
        return false;
      }
      board[sq] = { type: piece.type, color: piece.color };
      if (piece.type === KING) {
        kings[piece.color] = sq;
      }
      update_setup(generate_fen());
      return true;
    }
    function remove(square) {
      var piece = get(square);
      board[SQUARES[square]] = null;
      if (piece && piece.type === KING) {
        kings[piece.color] = EMPTY;
      }
      update_setup(generate_fen());
      return piece;
    }
    function build_move(board2, from, to, flags, promotion) {
      var move = {
        color: turn,
        from,
        to,
        flags,
        piece: board2[from].type
      };
      if (promotion) {
        move.flags |= BITS.PROMOTION;
        move.promotion = promotion;
      }
      if (board2[to]) {
        move.captured = board2[to].type;
      } else if (flags & BITS.EP_CAPTURE) {
        move.captured = PAWN;
      }
      return move;
    }
    function generate_moves(options) {
      function add_move(board2, moves2, from, to, flags) {
        if (board2[from].type === PAWN && (rank(to) === RANK_8 || rank(to) === RANK_1)) {
          var pieces = [QUEEN, ROOK, BISHOP, KNIGHT];
          for (var i2 = 0, len2 = pieces.length; i2 < len2; i2++) {
            moves2.push(build_move(board2, from, to, flags, pieces[i2]));
          }
        } else {
          moves2.push(build_move(board2, from, to, flags));
        }
      }
      var moves = [];
      var us = turn;
      var them = swap_color(us);
      var second_rank = { b: RANK_7, w: RANK_2 };
      var first_sq = SQUARES.a8;
      var last_sq = SQUARES.h1;
      var single_square = false;
      var legal = typeof options !== "undefined" && "legal" in options ? options.legal : true;
      var piece_type = typeof options !== "undefined" && "piece" in options && typeof options.piece === "string" ? options.piece.toLowerCase() : true;
      if (typeof options !== "undefined" && "square" in options) {
        if (options.square in SQUARES) {
          first_sq = last_sq = SQUARES[options.square];
          single_square = true;
        } else {
          return [];
        }
      }
      for (var i = first_sq; i <= last_sq; i++) {
        if (i & 136) {
          i += 7;
          continue;
        }
        var piece = board[i];
        if (piece == null || piece.color !== us) {
          continue;
        }
        if (piece.type === PAWN && (piece_type === true || piece_type === PAWN)) {
          var square = i + PAWN_OFFSETS[us][0];
          if (board[square] == null) {
            add_move(board, moves, i, square, BITS.NORMAL);
            var square = i + PAWN_OFFSETS[us][1];
            if (second_rank[us] === rank(i) && board[square] == null) {
              add_move(board, moves, i, square, BITS.BIG_PAWN);
            }
          }
          for (j = 2; j < 4; j++) {
            var square = i + PAWN_OFFSETS[us][j];
            if (square & 136)
              continue;
            if (board[square] != null && board[square].color === them) {
              add_move(board, moves, i, square, BITS.CAPTURE);
            } else if (square === ep_square) {
              add_move(board, moves, i, ep_square, BITS.EP_CAPTURE);
            }
          }
        } else if (piece_type === true || piece_type === piece.type) {
          for (var j = 0, len = PIECE_OFFSETS[piece.type].length; j < len; j++) {
            var offset = PIECE_OFFSETS[piece.type][j];
            var square = i;
            while (true) {
              square += offset;
              if (square & 136)
                break;
              if (board[square] == null) {
                add_move(board, moves, i, square, BITS.NORMAL);
              } else {
                if (board[square].color === us)
                  break;
                add_move(board, moves, i, square, BITS.CAPTURE);
                break;
              }
              if (piece.type === "n" || piece.type === "k")
                break;
            }
          }
        }
      }
      if (piece_type === true || piece_type === KING) {
        if (!single_square || last_sq === kings[us]) {
          if (castling[us] & BITS.KSIDE_CASTLE) {
            var castling_from = kings[us];
            var castling_to = castling_from + 2;
            if (board[castling_from + 1] == null && board[castling_to] == null && !attacked(them, kings[us]) && !attacked(them, castling_from + 1) && !attacked(them, castling_to)) {
              add_move(board, moves, kings[us], castling_to, BITS.KSIDE_CASTLE);
            }
          }
          if (castling[us] & BITS.QSIDE_CASTLE) {
            var castling_from = kings[us];
            var castling_to = castling_from - 2;
            if (board[castling_from - 1] == null && board[castling_from - 2] == null && board[castling_from - 3] == null && !attacked(them, kings[us]) && !attacked(them, castling_from - 1) && !attacked(them, castling_to)) {
              add_move(board, moves, kings[us], castling_to, BITS.QSIDE_CASTLE);
            }
          }
        }
      }
      if (!legal) {
        return moves;
      }
      var legal_moves = [];
      for (var i = 0, len = moves.length; i < len; i++) {
        make_move(moves[i]);
        if (!king_attacked(us)) {
          legal_moves.push(moves[i]);
        }
        undo_move();
      }
      return legal_moves;
    }
    function move_to_san(move, moves) {
      var output = "";
      if (move.flags & BITS.KSIDE_CASTLE) {
        output = "O-O";
      } else if (move.flags & BITS.QSIDE_CASTLE) {
        output = "O-O-O";
      } else {
        if (move.piece !== PAWN) {
          var disambiguator = get_disambiguator(move, moves);
          output += move.piece.toUpperCase() + disambiguator;
        }
        if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
          if (move.piece === PAWN) {
            output += algebraic(move.from)[0];
          }
          output += "x";
        }
        output += algebraic(move.to);
        if (move.flags & BITS.PROMOTION) {
          output += "=" + move.promotion.toUpperCase();
        }
      }
      make_move(move);
      if (in_check()) {
        if (in_checkmate()) {
          output += "#";
        } else {
          output += "+";
        }
      }
      undo_move();
      return output;
    }
    function stripped_san(move) {
      return move.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
    }
    function attacked(color, square) {
      for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
        if (i & 136) {
          i += 7;
          continue;
        }
        if (board[i] == null || board[i].color !== color)
          continue;
        var piece = board[i];
        var difference = i - square;
        var index = difference + 119;
        if (ATTACKS[index] & 1 << SHIFTS[piece.type]) {
          if (piece.type === PAWN) {
            if (difference > 0) {
              if (piece.color === WHITE)
                return true;
            } else {
              if (piece.color === BLACK)
                return true;
            }
            continue;
          }
          if (piece.type === "n" || piece.type === "k")
            return true;
          var offset = RAYS[index];
          var j = i + offset;
          var blocked = false;
          while (j !== square) {
            if (board[j] != null) {
              blocked = true;
              break;
            }
            j += offset;
          }
          if (!blocked)
            return true;
        }
      }
      return false;
    }
    function king_attacked(color) {
      return attacked(swap_color(color), kings[color]);
    }
    function in_check() {
      return king_attacked(turn);
    }
    function in_checkmate() {
      return in_check() && generate_moves().length === 0;
    }
    function in_stalemate() {
      return !in_check() && generate_moves().length === 0;
    }
    function insufficient_material() {
      var pieces = {};
      var bishops = [];
      var num_pieces = 0;
      var sq_color = 0;
      for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
        sq_color = (sq_color + 1) % 2;
        if (i & 136) {
          i += 7;
          continue;
        }
        var piece = board[i];
        if (piece) {
          pieces[piece.type] = piece.type in pieces ? pieces[piece.type] + 1 : 1;
          if (piece.type === BISHOP) {
            bishops.push(sq_color);
          }
          num_pieces++;
        }
      }
      if (num_pieces === 2) {
        return true;
      } else if (num_pieces === 3 && (pieces[BISHOP] === 1 || pieces[KNIGHT] === 1)) {
        return true;
      } else if (num_pieces === pieces[BISHOP] + 2) {
        var sum = 0;
        var len = bishops.length;
        for (var i = 0; i < len; i++) {
          sum += bishops[i];
        }
        if (sum === 0 || sum === len) {
          return true;
        }
      }
      return false;
    }
    function in_threefold_repetition() {
      var moves = [];
      var positions = {};
      var repetition = false;
      while (true) {
        var move = undo_move();
        if (!move)
          break;
        moves.push(move);
      }
      while (true) {
        var fen2 = generate_fen().split(" ").slice(0, 4).join(" ");
        positions[fen2] = fen2 in positions ? positions[fen2] + 1 : 1;
        if (positions[fen2] >= 3) {
          repetition = true;
        }
        if (!moves.length) {
          break;
        }
        make_move(moves.pop());
      }
      return repetition;
    }
    function push(move) {
      history.push({
        move,
        kings: { b: kings.b, w: kings.w },
        turn,
        castling: { b: castling.b, w: castling.w },
        ep_square,
        half_moves,
        move_number
      });
    }
    function make_move(move) {
      var us = turn;
      var them = swap_color(us);
      push(move);
      board[move.to] = board[move.from];
      board[move.from] = null;
      if (move.flags & BITS.EP_CAPTURE) {
        if (turn === BLACK) {
          board[move.to - 16] = null;
        } else {
          board[move.to + 16] = null;
        }
      }
      if (move.flags & BITS.PROMOTION) {
        board[move.to] = { type: move.promotion, color: us };
      }
      if (board[move.to].type === KING) {
        kings[board[move.to].color] = move.to;
        if (move.flags & BITS.KSIDE_CASTLE) {
          var castling_to = move.to - 1;
          var castling_from = move.to + 1;
          board[castling_to] = board[castling_from];
          board[castling_from] = null;
        } else if (move.flags & BITS.QSIDE_CASTLE) {
          var castling_to = move.to + 1;
          var castling_from = move.to - 2;
          board[castling_to] = board[castling_from];
          board[castling_from] = null;
        }
        castling[us] = "";
      }
      if (castling[us]) {
        for (var i = 0, len = ROOKS[us].length; i < len; i++) {
          if (move.from === ROOKS[us][i].square && castling[us] & ROOKS[us][i].flag) {
            castling[us] ^= ROOKS[us][i].flag;
            break;
          }
        }
      }
      if (castling[them]) {
        for (var i = 0, len = ROOKS[them].length; i < len; i++) {
          if (move.to === ROOKS[them][i].square && castling[them] & ROOKS[them][i].flag) {
            castling[them] ^= ROOKS[them][i].flag;
            break;
          }
        }
      }
      if (move.flags & BITS.BIG_PAWN) {
        if (turn === "b") {
          ep_square = move.to - 16;
        } else {
          ep_square = move.to + 16;
        }
      } else {
        ep_square = EMPTY;
      }
      if (move.piece === PAWN) {
        half_moves = 0;
      } else if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
        half_moves = 0;
      } else {
        half_moves++;
      }
      if (turn === BLACK) {
        move_number++;
      }
      turn = swap_color(turn);
    }
    function undo_move() {
      var old = history.pop();
      if (old == null) {
        return null;
      }
      var move = old.move;
      kings = old.kings;
      turn = old.turn;
      castling = old.castling;
      ep_square = old.ep_square;
      half_moves = old.half_moves;
      move_number = old.move_number;
      var us = turn;
      var them = swap_color(turn);
      board[move.from] = board[move.to];
      board[move.from].type = move.piece;
      board[move.to] = null;
      if (move.flags & BITS.CAPTURE) {
        board[move.to] = { type: move.captured, color: them };
      } else if (move.flags & BITS.EP_CAPTURE) {
        var index;
        if (us === BLACK) {
          index = move.to - 16;
        } else {
          index = move.to + 16;
        }
        board[index] = { type: PAWN, color: them };
      }
      if (move.flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
        var castling_to, castling_from;
        if (move.flags & BITS.KSIDE_CASTLE) {
          castling_to = move.to + 1;
          castling_from = move.to - 1;
        } else if (move.flags & BITS.QSIDE_CASTLE) {
          castling_to = move.to - 2;
          castling_from = move.to + 1;
        }
        board[castling_to] = board[castling_from];
        board[castling_from] = null;
      }
      return move;
    }
    function get_disambiguator(move, moves) {
      var from = move.from;
      var to = move.to;
      var piece = move.piece;
      var ambiguities = 0;
      var same_rank = 0;
      var same_file = 0;
      for (var i = 0, len = moves.length; i < len; i++) {
        var ambig_from = moves[i].from;
        var ambig_to = moves[i].to;
        var ambig_piece = moves[i].piece;
        if (piece === ambig_piece && from !== ambig_from && to === ambig_to) {
          ambiguities++;
          if (rank(from) === rank(ambig_from)) {
            same_rank++;
          }
          if (file(from) === file(ambig_from)) {
            same_file++;
          }
        }
      }
      if (ambiguities > 0) {
        if (same_rank > 0 && same_file > 0) {
          return algebraic(from);
        } else if (same_file > 0) {
          return algebraic(from).charAt(1);
        } else {
          return algebraic(from).charAt(0);
        }
      }
      return "";
    }
    function infer_piece_type(san) {
      var piece_type = san.charAt(0);
      if (piece_type >= "a" && piece_type <= "h") {
        var matches = san.match(/[a-h]\d.*[a-h]\d/);
        if (matches) {
          return void 0;
        }
        return PAWN;
      }
      piece_type = piece_type.toLowerCase();
      if (piece_type === "o") {
        return KING;
      }
      return piece_type;
    }
    function ascii() {
      var s = "   +------------------------+\n";
      for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
        if (file(i) === 0) {
          s += " " + "87654321"[rank(i)] + " |";
        }
        if (board[i] == null) {
          s += " . ";
        } else {
          var piece = board[i].type;
          var color = board[i].color;
          var symbol = color === WHITE ? piece.toUpperCase() : piece.toLowerCase();
          s += " " + symbol + " ";
        }
        if (i + 1 & 136) {
          s += "|\n";
          i += 8;
        }
      }
      s += "   +------------------------+\n";
      s += "     a  b  c  d  e  f  g  h\n";
      return s;
    }
    function move_from_san(move, sloppy) {
      var clean_move = stripped_san(move);
      var overly_disambiguated = false;
      if (sloppy) {
        var matches = clean_move.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);
        if (matches) {
          var piece = matches[1];
          var from = matches[2];
          var to = matches[3];
          var promotion = matches[4];
          if (from.length == 1) {
            overly_disambiguated = true;
          }
        } else {
          var matches = clean_move.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/);
          if (matches) {
            var piece = matches[1];
            var from = matches[2];
            var to = matches[3];
            var promotion = matches[4];
            if (from.length == 1) {
              var overly_disambiguated = true;
            }
          }
        }
      }
      var piece_type = infer_piece_type(clean_move);
      var moves = generate_moves({
        legal: true,
        piece: piece ? piece : piece_type
      });
      for (var i = 0, len = moves.length; i < len; i++) {
        if (clean_move === stripped_san(move_to_san(moves[i], moves))) {
          return moves[i];
        } else {
          if (sloppy && matches) {
            if ((!piece || piece.toLowerCase() == moves[i].piece) && SQUARES[from] == moves[i].from && SQUARES[to] == moves[i].to && (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
              return moves[i];
            } else if (overly_disambiguated) {
              var square = algebraic(moves[i].from);
              if ((!piece || piece.toLowerCase() == moves[i].piece) && SQUARES[to] == moves[i].to && (from == square[0] || from == square[1]) && (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
                return moves[i];
              }
            }
          }
        }
      }
      return null;
    }
    function rank(i) {
      return i >> 4;
    }
    function file(i) {
      return i & 15;
    }
    function algebraic(i) {
      var f = file(i), r = rank(i);
      return "abcdefgh".substring(f, f + 1) + "87654321".substring(r, r + 1);
    }
    function swap_color(c) {
      return c === WHITE ? BLACK : WHITE;
    }
    function is_digit(c) {
      return "0123456789".indexOf(c) !== -1;
    }
    function make_pretty(ugly_move) {
      var move = clone(ugly_move);
      move.san = move_to_san(move, generate_moves({ legal: true }));
      move.to = algebraic(move.to);
      move.from = algebraic(move.from);
      var flags = "";
      for (var flag in BITS) {
        if (BITS[flag] & move.flags) {
          flags += FLAGS[flag];
        }
      }
      move.flags = flags;
      return move;
    }
    function clone(obj) {
      var dupe = obj instanceof Array ? [] : {};
      for (var property in obj) {
        if (typeof property === "object") {
          dupe[property] = clone(obj[property]);
        } else {
          dupe[property] = obj[property];
        }
      }
      return dupe;
    }
    function trim(str) {
      return str.replace(/^\s+|\s+$/g, "");
    }
    function perft(depth) {
      var moves = generate_moves({ legal: false });
      var nodes = 0;
      var color = turn;
      for (var i = 0, len = moves.length; i < len; i++) {
        make_move(moves[i]);
        if (!king_attacked(color)) {
          if (depth - 1 > 0) {
            var child_nodes = perft(depth - 1);
            nodes += child_nodes;
          } else {
            nodes++;
          }
        }
        undo_move();
      }
      return nodes;
    }
    return {
      WHITE,
      BLACK,
      PAWN,
      KNIGHT,
      BISHOP,
      ROOK,
      QUEEN,
      KING,
      SQUARES: function() {
        var keys = [];
        for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
          if (i & 136) {
            i += 7;
            continue;
          }
          keys.push(algebraic(i));
        }
        return keys;
      }(),
      FLAGS,
      load: function(fen2) {
        return load(fen2);
      },
      reset: function() {
        return reset();
      },
      moves: function(options) {
        var ugly_moves = generate_moves(options);
        var moves = [];
        for (var i = 0, len = ugly_moves.length; i < len; i++) {
          if (typeof options !== "undefined" && "verbose" in options && options.verbose) {
            moves.push(make_pretty(ugly_moves[i]));
          } else {
            moves.push(move_to_san(ugly_moves[i], generate_moves({ legal: true })));
          }
        }
        return moves;
      },
      in_check: function() {
        return in_check();
      },
      in_checkmate: function() {
        return in_checkmate();
      },
      in_stalemate: function() {
        return in_stalemate();
      },
      in_draw: function() {
        return half_moves >= 100 || in_stalemate() || insufficient_material() || in_threefold_repetition();
      },
      insufficient_material: function() {
        return insufficient_material();
      },
      in_threefold_repetition: function() {
        return in_threefold_repetition();
      },
      game_over: function() {
        return half_moves >= 100 || in_checkmate() || in_stalemate() || insufficient_material() || in_threefold_repetition();
      },
      validate_fen: function(fen2) {
        return validate_fen(fen2);
      },
      fen: function() {
        return generate_fen();
      },
      board: function() {
        var output = [], row = [];
        for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
          if (board[i] == null) {
            row.push(null);
          } else {
            row.push({ type: board[i].type, color: board[i].color });
          }
          if (i + 1 & 136) {
            output.push(row);
            row = [];
            i += 8;
          }
        }
        return output;
      },
      pgn: function(options) {
        var newline = typeof options === "object" && typeof options.newline_char === "string" ? options.newline_char : "\n";
        var max_width = typeof options === "object" && typeof options.max_width === "number" ? options.max_width : 0;
        var result = [];
        var header_exists = false;
        for (var i in header) {
          result.push("[" + i + ' "' + header[i] + '"]' + newline);
          header_exists = true;
        }
        if (header_exists && history.length) {
          result.push(newline);
        }
        var append_comment = function(move_string2) {
          var comment = comments[generate_fen()];
          if (typeof comment !== "undefined") {
            var delimiter = move_string2.length > 0 ? " " : "";
            move_string2 = `${move_string2}${delimiter}{${comment}}`;
          }
          return move_string2;
        };
        var reversed_history = [];
        while (history.length > 0) {
          reversed_history.push(undo_move());
        }
        var moves = [];
        var move_string = "";
        if (reversed_history.length === 0) {
          moves.push(append_comment(""));
        }
        while (reversed_history.length > 0) {
          move_string = append_comment(move_string);
          var move = reversed_history.pop();
          if (!history.length && move.color === "b") {
            move_string = move_number + ". ...";
          } else if (move.color === "w") {
            if (move_string.length) {
              moves.push(move_string);
            }
            move_string = move_number + ".";
          }
          move_string = move_string + " " + move_to_san(move, generate_moves({ legal: true }));
          make_move(move);
        }
        if (move_string.length) {
          moves.push(append_comment(move_string));
        }
        if (typeof header.Result !== "undefined") {
          moves.push(header.Result);
        }
        if (max_width === 0) {
          return result.join("") + moves.join(" ");
        }
        var strip = function() {
          if (result.length > 0 && result[result.length - 1] === " ") {
            result.pop();
            return true;
          }
          return false;
        };
        var wrap_comment = function(width, move2) {
          for (var token of move2.split(" ")) {
            if (!token) {
              continue;
            }
            if (width + token.length > max_width) {
              while (strip()) {
                width--;
              }
              result.push(newline);
              width = 0;
            }
            result.push(token);
            width += token.length;
            result.push(" ");
            width++;
          }
          if (strip()) {
            width--;
          }
          return width;
        };
        var current_width = 0;
        for (var i = 0; i < moves.length; i++) {
          if (current_width + moves[i].length > max_width) {
            if (moves[i].includes("{")) {
              current_width = wrap_comment(current_width, moves[i]);
              continue;
            }
          }
          if (current_width + moves[i].length > max_width && i !== 0) {
            if (result[result.length - 1] === " ") {
              result.pop();
            }
            result.push(newline);
            current_width = 0;
          } else if (i !== 0) {
            result.push(" ");
            current_width++;
          }
          result.push(moves[i]);
          current_width += moves[i].length;
        }
        return result.join("");
      },
      load_pgn: function(pgn, options) {
        var sloppy = typeof options !== "undefined" && "sloppy" in options ? options.sloppy : false;
        function mask(str) {
          return str.replace(/\\/g, "\\");
        }
        function has_keys(object) {
          for (var key2 in object) {
            return true;
          }
          return false;
        }
        function parse_pgn_header(header2, options2) {
          var newline_char2 = typeof options2 === "object" && typeof options2.newline_char === "string" ? options2.newline_char : "\r?\n";
          var header_obj = {};
          var headers2 = header2.split(new RegExp(mask(newline_char2)));
          var key2 = "";
          var value = "";
          for (var i = 0; i < headers2.length; i++) {
            key2 = headers2[i].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/, "$1");
            value = headers2[i].replace(/^\[[A-Za-z]+\s"(.*)"\ *\]$/, "$1");
            if (trim(key2).length > 0) {
              header_obj[key2] = value;
            }
          }
          return header_obj;
        }
        var newline_char = typeof options === "object" && typeof options.newline_char === "string" ? options.newline_char : "\r?\n";
        var header_regex = new RegExp("^(\\[((?:" + mask(newline_char) + ")|.)*\\])(?:" + mask(newline_char) + "){2}");
        var header_string = header_regex.test(pgn) ? header_regex.exec(pgn)[1] : "";
        reset();
        var headers = parse_pgn_header(header_string, options);
        for (var key in headers) {
          set_header([key, headers[key]]);
        }
        if (headers["SetUp"] === "1") {
          if (!("FEN" in headers && load(headers["FEN"], true))) {
            return false;
          }
        }
        var to_hex = function(string) {
          return Array.from(string).map(function(c) {
            return c.charCodeAt(0) < 128 ? c.charCodeAt(0).toString(16) : encodeURIComponent(c).replace(/\%/g, "").toLowerCase();
          }).join("");
        };
        var from_hex = function(string) {
          return string.length == 0 ? "" : decodeURIComponent("%" + string.match(/.{1,2}/g).join("%"));
        };
        var encode_comment = function(string) {
          string = string.replace(new RegExp(mask(newline_char), "g"), " ");
          return `{${to_hex(string.slice(1, string.length - 1))}}`;
        };
        var decode_comment = function(string) {
          if (string.startsWith("{") && string.endsWith("}")) {
            return from_hex(string.slice(1, string.length - 1));
          }
        };
        var ms = pgn.replace(header_string, "").replace(new RegExp(`({[^}]*})+?|;([^${mask(newline_char)}]*)`, "g"), function(match, bracket, semicolon) {
          return bracket !== void 0 ? encode_comment(bracket) : " " + encode_comment(`{${semicolon.slice(1)}}`);
        }).replace(new RegExp(mask(newline_char), "g"), " ");
        var rav_regex = /(\([^\(\)]+\))+?/g;
        while (rav_regex.test(ms)) {
          ms = ms.replace(rav_regex, "");
        }
        ms = ms.replace(/\d+\.(\.\.)?/g, "");
        ms = ms.replace(/\.\.\./g, "");
        ms = ms.replace(/\$\d+/g, "");
        var moves = trim(ms).split(new RegExp(/\s+/));
        moves = moves.join(",").replace(/,,+/g, ",").split(",");
        var move = "";
        var result = "";
        for (var half_move = 0; half_move < moves.length; half_move++) {
          var comment = decode_comment(moves[half_move]);
          if (comment !== void 0) {
            comments[generate_fen()] = comment;
            continue;
          }
          move = move_from_san(moves[half_move], sloppy);
          if (move == null) {
            if (TERMINATION_MARKERS.indexOf(moves[half_move]) > -1) {
              result = moves[half_move];
            } else {
              return false;
            }
          } else {
            result = "";
            make_move(move);
          }
        }
        if (result && Object.keys(header).length && !header["Result"]) {
          set_header(["Result", result]);
        }
        return true;
      },
      header: function() {
        return set_header(arguments);
      },
      ascii: function() {
        return ascii();
      },
      turn: function() {
        return turn;
      },
      move: function(move, options) {
        var sloppy = typeof options !== "undefined" && "sloppy" in options ? options.sloppy : false;
        var move_obj = null;
        if (typeof move === "string") {
          move_obj = move_from_san(move, sloppy);
        } else if (typeof move === "object") {
          var moves = generate_moves();
          for (var i = 0, len = moves.length; i < len; i++) {
            if (move.from === algebraic(moves[i].from) && move.to === algebraic(moves[i].to) && (!("promotion" in moves[i]) || move.promotion === moves[i].promotion)) {
              move_obj = moves[i];
              break;
            }
          }
        }
        if (!move_obj) {
          return null;
        }
        var pretty_move = make_pretty(move_obj);
        make_move(move_obj);
        return pretty_move;
      },
      undo: function() {
        var move = undo_move();
        return move ? make_pretty(move) : null;
      },
      clear: function() {
        return clear();
      },
      put: function(piece, square) {
        return put(piece, square);
      },
      get: function(square) {
        return get(square);
      },
      remove: function(square) {
        return remove(square);
      },
      perft: function(depth) {
        return perft(depth);
      },
      square_color: function(square) {
        if (square in SQUARES) {
          var sq_0x88 = SQUARES[square];
          return (rank(sq_0x88) + file(sq_0x88)) % 2 === 0 ? "light" : "dark";
        }
        return null;
      },
      history: function(options) {
        var reversed_history = [];
        var move_history = [];
        var verbose = typeof options !== "undefined" && "verbose" in options && options.verbose;
        while (history.length > 0) {
          reversed_history.push(undo_move());
        }
        while (reversed_history.length > 0) {
          var move = reversed_history.pop();
          if (verbose) {
            move_history.push(make_pretty(move));
          } else {
            move_history.push(move_to_san(move, generate_moves({ legal: true })));
          }
          make_move(move);
        }
        return move_history;
      },
      get_comment: function() {
        return comments[generate_fen()];
      },
      set_comment: function(comment) {
        comments[generate_fen()] = comment.replace("{", "[").replace("}", "]");
      },
      delete_comment: function() {
        var comment = comments[generate_fen()];
        delete comments[generate_fen()];
        return comment;
      },
      get_comments: function() {
        prune_comments();
        return Object.keys(comments).map(function(fen2) {
          return { fen: fen2, comment: comments[fen2] };
        });
      },
      delete_comments: function() {
        prune_comments();
        return Object.keys(comments).map(function(fen2) {
          var comment = comments[fen2];
          delete comments[fen2];
          return { fen: fen2, comment };
        });
      }
    };
  };

  // widget-src/code.tsx
  var chess960Lib = __toModule(require_chess960());

  // widget-src/ai.js
  var positionCount;
  var weights = { p: 100, n: 280, b: 320, r: 479, q: 929, k: 6e4, k_e: 6e4 };
  var pst_w = {
    p: [
      [100, 100, 100, 100, 105, 100, 100, 100],
      [78, 83, 86, 73, 102, 82, 85, 90],
      [7, 29, 21, 44, 40, 31, 44, 7],
      [-17, 16, -2, 15, 14, 0, 15, -13],
      [-26, 3, 10, 9, 6, 1, 0, -23],
      [-22, 9, 5, -11, -10, -2, 3, -19],
      [-31, 8, -7, -37, -36, -14, 3, -31],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ],
    n: [
      [-66, -53, -75, -75, -10, -55, -58, -70],
      [-3, -6, 100, -36, 4, 62, -4, -14],
      [10, 67, 1, 74, 73, 27, 62, -2],
      [24, 24, 45, 37, 33, 41, 25, 17],
      [-1, 5, 31, 21, 22, 35, 2, 0],
      [-18, 10, 13, 22, 18, 15, 11, -14],
      [-23, -15, 2, 0, 2, 0, -23, -20],
      [-74, -23, -26, -24, -19, -35, -22, -69]
    ],
    b: [
      [-59, -78, -82, -76, -23, -107, -37, -50],
      [-11, 20, 35, -42, -39, 31, 2, -22],
      [-9, 39, -32, 41, 52, -10, 28, -14],
      [25, 17, 20, 34, 26, 25, 15, 10],
      [13, 10, 17, 23, 17, 16, 0, 7],
      [14, 25, 24, 15, 8, 25, 20, 15],
      [19, 20, 11, 6, 7, 6, 20, 16],
      [-7, 2, -15, -12, -14, -15, -10, -10]
    ],
    r: [
      [35, 29, 33, 4, 37, 33, 56, 50],
      [55, 29, 56, 67, 55, 62, 34, 60],
      [19, 35, 28, 33, 45, 27, 25, 15],
      [0, 5, 16, 13, 18, -4, -9, -6],
      [-28, -35, -16, -21, -13, -29, -46, -30],
      [-42, -28, -42, -25, -25, -35, -26, -46],
      [-53, -38, -31, -26, -29, -43, -44, -53],
      [-30, -24, -18, 5, -2, -18, -31, -32]
    ],
    q: [
      [6, 1, -8, -104, 69, 24, 88, 26],
      [14, 32, 60, -10, 20, 76, 57, 24],
      [-2, 43, 32, 60, 72, 63, 43, 2],
      [1, -16, 22, 17, 25, 20, -13, -6],
      [-14, -15, -2, -5, -1, -10, -20, -22],
      [-30, -6, -13, -11, -16, -11, -16, -27],
      [-36, -18, 0, -19, -15, -15, -21, -38],
      [-39, -30, -31, -13, -31, -36, -34, -42]
    ],
    k: [
      [4, 54, 47, -99, -99, 60, 83, -62],
      [-32, 10, 55, 56, 56, 55, 10, 3],
      [-62, 12, -57, 44, -67, 28, 37, -31],
      [-55, 50, 11, -4, -19, 13, 0, -49],
      [-55, -43, -52, -28, -51, -47, -8, -50],
      [-47, -42, -43, -79, -64, -32, -29, -32],
      [-4, 3, -14, -50, -57, -18, 13, 4],
      [17, 30, -3, -14, 6, -1, 40, 18]
    ],
    k_e: [
      [-50, -40, -30, -20, -20, -30, -40, -50],
      [-30, -20, -10, 0, 0, -10, -20, -30],
      [-30, -10, 20, 30, 30, 20, -10, -30],
      [-30, -10, 30, 40, 40, 30, -10, -30],
      [-30, -10, 30, 40, 40, 30, -10, -30],
      [-30, -10, 20, 30, 30, 20, -10, -30],
      [-30, -30, 0, 0, 0, 0, -30, -30],
      [-50, -30, -30, -30, -30, -30, -30, -50]
    ]
  };
  var pst_b = {
    p: pst_w["p"].slice().reverse(),
    n: pst_w["n"].slice().reverse(),
    b: pst_w["b"].slice().reverse(),
    r: pst_w["r"].slice().reverse(),
    q: pst_w["q"].slice().reverse(),
    k: pst_w["k"].slice().reverse(),
    k_e: pst_w["k_e"].slice().reverse()
  };
  var pstOpponent = { w: pst_b, b: pst_w };
  var pstSelf = { w: pst_w, b: pst_b };
  function evaluateBoard(game, move, prevSum, color) {
    if (game.in_checkmate()) {
      if (move.color === color) {
        return __pow(10, 10);
      } else {
        return -__pow(10, 10);
      }
    }
    if (game.in_draw() || game.in_threefold_repetition() || game.in_stalemate()) {
      return 0;
    }
    if (game.in_check()) {
      if (move.color === color) {
        prevSum += 50;
      } else {
        prevSum -= 50;
      }
    }
    var from = [
      8 - parseInt(move.from[1]),
      move.from.charCodeAt(0) - "a".charCodeAt(0)
    ];
    var to = [
      8 - parseInt(move.to[1]),
      move.to.charCodeAt(0) - "a".charCodeAt(0)
    ];
    if (prevSum < -1500) {
      if (move.piece === "k") {
        move.piece = "k_e";
      }
    }
    if ("captured" in move) {
      if (move.color === color) {
        prevSum += weights[move.captured] + pstOpponent[move.color][move.captured][to[0]][to[1]];
      } else {
        prevSum -= weights[move.captured] + pstSelf[move.color][move.captured][to[0]][to[1]];
      }
    }
    if (move.flags.includes("p")) {
      move.promotion = "q";
      if (move.color === color) {
        prevSum -= weights[move.piece] + pstSelf[move.color][move.piece][from[0]][from[1]];
        prevSum += weights[move.promotion] + pstSelf[move.color][move.promotion][to[0]][to[1]];
      } else {
        prevSum += weights[move.piece] + pstSelf[move.color][move.piece][from[0]][from[1]];
        prevSum -= weights[move.promotion] + pstSelf[move.color][move.promotion][to[0]][to[1]];
      }
    } else {
      if (move.color !== color) {
        prevSum += pstSelf[move.color][move.piece][from[0]][from[1]];
        prevSum -= pstSelf[move.color][move.piece][to[0]][to[1]];
      } else {
        prevSum -= pstSelf[move.color][move.piece][from[0]][from[1]];
        prevSum += pstSelf[move.color][move.piece][to[0]][to[1]];
      }
    }
    return prevSum;
  }
  function minimax(game, depth, alpha, beta, isMaximizingPlayer, sum, color) {
    positionCount++;
    var children = game.moves({ verbose: true });
    children.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    var currMove;
    if (depth === 0 || children.length === 0) {
      return [null, sum];
    }
    var maxValue = Number.NEGATIVE_INFINITY;
    var minValue = Number.POSITIVE_INFINITY;
    var bestMove;
    for (var i = 0; i < children.length; i++) {
      currMove = children[i];
      var currPrettyMove = game.move(currMove);
      var newSum = evaluateBoard(game, currPrettyMove, sum, color);
      var [childBestMove, childValue] = minimax(game, depth - 1, alpha, beta, !isMaximizingPlayer, newSum, color);
      game.undo();
      if (isMaximizingPlayer) {
        if (childValue > maxValue) {
          maxValue = childValue;
          bestMove = currPrettyMove;
        }
        if (childValue > alpha) {
          alpha = childValue;
        }
      } else {
        if (childValue < minValue) {
          minValue = childValue;
          bestMove = currPrettyMove;
        }
        if (childValue < beta) {
          beta = childValue;
        }
      }
      if (alpha >= beta) {
        break;
      }
    }
    if (isMaximizingPlayer) {
      return [bestMove, maxValue];
    } else {
      return [bestMove, minValue];
    }
  }
  function getBestMove(game, color) {
    positionCount = 0;
    const depth = 1;
    var d = new Date().getTime();
    var [bestMove, bestMoveValue] = minimax(game, depth, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, true, 0, color);
    var d2 = new Date().getTime();
    var moveTime = d2 - d;
    var positionsPerS = positionCount * 1e3 / moveTime;
    console.log(`${positionCount} positions evaluated in ${moveTime / 1e3}s. That's ${Math.round(positionsPerS)} positions / s.`);
    return [bestMove, bestMoveValue];
  }

  // widget-src/pieces.ts
  var PIECES_SVG = {};
  PIECES_SVG["b"] = {};
  PIECES_SVG["w"] = {};
  PIECES_SVG["b"]["k"] = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
<g style="fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
  <path d="M 22.5,11.63 L 22.5,6" style="fill:none; stroke:#000000; stroke-linejoin:miter;" id="path6570"/>
  <path d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25" style="fill:#000000;fill-opacity:1; stroke-linecap:butt; stroke-linejoin:miter;"/>
  <path d="M 12.5,37 C 18,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 20,16 10.5,13 6.5,19.5 C 3.5,25.5 12.5,30 12.5,30 L 12.5,37" style="fill:#000000; stroke:#000000;"/>
  <path d="M 20,8 L 25,8" style="fill:none; stroke:#000000; stroke-linejoin:miter;"/>
  <path d="M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.5,26.6 L 22.5,24.5 C 20,18 10.85,14 6.97,19.85 C 4.5,25.5 13,29.5 13,29.5" style="fill:none; stroke:#ffffff;"/>
  <path d="M 12.5,30 C 18,27 27,27 32.5,30 M 12.5,33.5 C 18,30.5 27,30.5 32.5,33.5 M 12.5,37 C 18,34 27,34 32.5,37" style="fill:none; stroke:#ffffff;"/>
</g>
</svg>`;
  PIECES_SVG["b"]["q"] = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45"
height="45">
  <g style="fill:#000000;stroke:#000000;stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round">

    <path d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"
    style="stroke-linecap:butt;fill:#000000" />
    <path d="m 9,26 c 0,2 1.5,2 2.5,4 1,1.5 1,1 0.5,3.5 -1.5,1 -1,2.5 -1,2.5 -1.5,1.5 0,2.5 0,2.5 6.5,1 16.5,1 23,0 0,0 1.5,-1 0,-2.5 0,0 0.5,-1.5 -1,-2.5 -0.5,-2.5 -0.5,-2 0.5,-3.5 1,-2 2.5,-2 2.5,-4 -8.5,-1.5 -18.5,-1.5 -27,0 z" />
    <path d="M 11.5,30 C 15,29 30,29 33.5,30" />
    <path d="m 12,33.5 c 6,-1 15,-1 21,0" />
    <circle cx="6" cy="12" r="2" />
    <circle cx="14" cy="9" r="2" />
    <circle cx="22.5" cy="8" r="2" />
    <circle cx="31" cy="9" r="2" />
    <circle cx="39" cy="12" r="2" />
    <path d="M 11,38.5 A 35,35 1 0 0 34,38.5"
    style="fill:none; stroke:#000000;stroke-linecap:butt;" />
    <g style="fill:none; stroke:#ffffff;">
      <path d="M 11,29 A 35,35 1 0 1 34,29" />
      <path d="M 12.5,31.5 L 32.5,31.5" />
      <path d="M 11.5,34.5 A 35,35 1 0 0 33.5,34.5" />
      <path d="M 10.5,37.5 A 35,35 1 0 0 34.5,37.5" />
    </g>
  </g>
</svg>
`;
  PIECES_SVG["b"]["r"] = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
<g style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
  <path
    d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
    style="stroke-linecap:butt;" />
  <path
    d="M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z "
    style="stroke-linecap:butt;" />
  <path
    d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
    style="stroke-linecap:butt;" />
  <path
    d="M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z "
    style="stroke-linecap:butt;stroke-linejoin:miter;" />
  <path
    d="M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z "
    style="stroke-linecap:butt;" />
  <path
    d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z "
    style="stroke-linecap:butt;" />
  <path
    d="M 12,35.5 L 33,35.5 L 33,35.5"
    style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
  <path
    d="M 13,31.5 L 32,31.5"
    style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
  <path
    d="M 14,29.5 L 31,29.5"
    style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
  <path
    d="M 14,16.5 L 31,16.5"
    style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
  <path
    d="M 11,14 L 34,14"
    style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />
</g>
</svg>`;
  PIECES_SVG["b"]["b"] = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
<g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
  <g style="fill:#000000; stroke:#000000; stroke-linecap:butt;">
    <path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z"/>
    <path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"/>
    <path d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"/>
  </g>
  <path d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18" style="fill:none; stroke:#ffffff; stroke-linejoin:miter;"/>
</g>
</svg>`;
  PIECES_SVG["b"]["n"] = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
<g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
  <path
    d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"
    style="fill:#000000; stroke:#000000;" />
  <path
    d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"
    style="fill:#000000; stroke:#000000;" />
  <path
    d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"
    style="fill:#ffffff; stroke:#ffffff;" />
  <path
    d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"
    transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"
    style="fill:#ffffff; stroke:#ffffff;" />
  <path
    d="M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z "
    style="fill:#ffffff; stroke:none;" />
</g>
</svg>`;
  PIECES_SVG["b"]["p"] = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
<path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z" style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"/>
</svg>`;
  PIECES_SVG["w"]["k"] = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
<g style="fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
  <path d="M 22.5,11.63 L 22.5,6" style="fill:none; stroke:#000000; stroke-linejoin:miter;"/>
  <path d="M 20,8 L 25,8" style="fill:none; stroke:#000000; stroke-linejoin:miter;"/>
  <path d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25" style="fill:#ffffff; stroke:#000000; stroke-linecap:butt; stroke-linejoin:miter;"/>
  <path d="M 12.5,37 C 18,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 20,16 10.5,13 6.5,19.5 C 3.5,25.5 12.5,30 12.5,30 L 12.5,37" style="fill:#ffffff; stroke:#000000;"/>
  <path d="M 12.5,30 C 18,27 27,27 32.5,30" style="fill:none; stroke:#000000;"/>
  <path d="M 12.5,33.5 C 18,30.5 27,30.5 32.5,33.5" style="fill:none; stroke:#000000;"/>
  <path d="M 12.5,37 C 18,34 27,34 32.5,37" style="fill:none; stroke:#000000;"/>
</g>
</svg>`;
  PIECES_SVG["w"]["q"] = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
<g style="fill:#ffffff;stroke:#000000;stroke-width:1.5;stroke-linejoin:round">
  <path d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"/>
  <path d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 11,36 11,36 C 9.5,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z"/>
  <path d="M 11.5,30 C 15,29 30,29 33.5,30" style="fill:none"/>
  <path d="M 12,33.5 C 18,32.5 27,32.5 33,33.5" style="fill:none"/>
  <circle cx="6" cy="12" r="2" />
  <circle cx="14" cy="9" r="2" />
  <circle cx="22.5" cy="8" r="2" />
  <circle cx="31" cy="9" r="2" />
  <circle cx="39" cy="12" r="2" />
</g>
</svg>`;
  PIECES_SVG["w"]["r"] = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
<g style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
  <path
    d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
    style="stroke-linecap:butt;" />
  <path
    d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
    style="stroke-linecap:butt;" />
  <path
    d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14"
    style="stroke-linecap:butt;" />
  <path
    d="M 34,14 L 31,17 L 14,17 L 11,14" />
  <path
    d="M 31,17 L 31,29.5 L 14,29.5 L 14,17"
    style="stroke-linecap:butt; stroke-linejoin:miter;" />
  <path
    d="M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5" />
  <path
    d="M 11,14 L 34,14"
    style="fill:none; stroke:#000000; stroke-linejoin:miter;" />
</g>
</svg>`;
  PIECES_SVG["w"]["b"] = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
<g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
  <g style="fill:#ffffff; stroke:#000000; stroke-linecap:butt;">
    <path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z"/>
    <path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"/>
    <path d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"/>
  </g>
  <path d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18" style="fill:none; stroke:#000000; stroke-linejoin:miter;"/>
</g>
</svg>`;
  PIECES_SVG["w"]["n"] = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
<g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
  <path
    d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"
    style="fill:#ffffff; stroke:#000000;" />
  <path
    d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"
    style="fill:#ffffff; stroke:#000000;" />
  <path
    d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"
    style="fill:#000000; stroke:#000000;" />
  <path
    d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"
    transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"
    style="fill:#000000; stroke:#000000;" />
</g>
</svg>`;
  PIECES_SVG["w"]["p"] = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="45" height="45">
<path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z" style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"/>
</svg>`;

  // widget-src/code.tsx
  var { widget } = figma;
  var { Frame, AutoLayout, SVG, Text, useSyncedState, usePropertyMenu, useEffect, waitForTask } = widget;
  function Chess3() {
    const newBoardFen = () => {
      const board2 = play960 ? new chess960Lib.Chess() : new Chess();
      return board2.fen();
    };
    const [play960, setPlay960] = widget.useSyncedState("play960", false);
    const [boardFen, setBoardFen] = widget.useSyncedState("boardFen", newBoardFen());
    const [selected, setSelected] = widget.useSyncedState("selected", null);
    const [computer, setComputer] = widget.useSyncedState("computer", false);
    const [promoMove, setPromoMove] = widget.useSyncedState("promoMove", null);
    let chess = new Chess(boardFen);
    let board = chess.board();
    const promoPieces = ["q", "r", "b", "n"];
    const propertyMenu = [
      {
        tooltip: "New Game (2 Players)",
        propertyName: "reset",
        itemType: "action"
      },
      {
        tooltip: "New Chess960 Game (2 Players)",
        propertyName: "reset960",
        itemType: "action"
      },
      {
        tooltip: "New Game (Against AI)",
        propertyName: "reset-computer",
        itemType: "action"
      }
    ];
    usePropertyMenu(propertyMenu, (_0) => __async(this, [_0], function* ({ propertyName }) {
      if (propertyName === "reset") {
        setBoardFen(newBoardFen());
        setSelected(null);
        setPromoMove(null);
        setComputer(false);
      } else if (propertyName === "reset960") {
        chess = chess960Lib.Chess(generate960StartFen());
        board = chess.board();
        setBoardFen(chess.fen());
        setSelected(null);
        setPromoMove(null);
        setComputer(false);
      } else if (propertyName === "reset-computer") {
        setBoardFen(newBoardFen());
        setSelected(null);
        setPromoMove(null);
        setComputer(true);
      }
    }));
    const generate960StartFen = () => {
      var rank = new Array(8);
      const d = (num) => {
        return Math.floor(Math.random() * ++num);
      };
      const emptySquares = () => {
        let arr = [];
        for (let i = 0; i < 8; i++)
          if (rank[i] == void 0)
            arr.push(i);
        return arr;
      };
      rank[d(2) * 2] = "b";
      rank[d(2) * 2 + 1] = "b";
      rank[emptySquares()[d(5)]] = "q";
      rank[emptySquares()[d(4)]] = "n";
      rank[emptySquares()[d(3)]] = "n";
      for (var x = 1; x <= 3; x++)
        rank[emptySquares()[0]] = x == 2 ? "k" : "r";
      let fen = "";
      for (let i = 0; i < rank.length; i++) {
        fen += rank[i];
      }
      fen += "/pppppppp/8/8/8/8/PPPPPPPP/";
      for (let i = 0; i < rank.length; i++) {
        fen += rank[i].toUpperCase();
      }
      fen += " w KQkq - 0 1";
      return fen;
    };
    const endGameCondition = (() => {
      if (chess.in_checkmate()) {
        return `Checkmate! ${chess.turn() == "w" ? "Black" : "White"} wins.`;
      } else if (chess.in_draw()) {
        return "The game is a draw.";
      } else if (chess.in_stalemate()) {
        return "The game is a stalemate.";
      } else if (chess.in_threefold_repetition()) {
        return "The game is a draw by repetition.";
      } else {
        return "";
      }
    })();
    const promoMenu = (color) => {
      const active = promoMove !== null && chess.turn() === color;
      return /* @__PURE__ */ figma.widget.h(AutoLayout, {
        direction: "horizontal",
        horizontalAlignItems: "center",
        verticalAlignItems: "center",
        height: "hug-contents",
        width: "hug-contents",
        key: `promo:${color}`
      }, promoPieces.map((piece) => {
        return /* @__PURE__ */ figma.widget.h(AutoLayout, {
          opacity: active ? 1 : 0,
          onClick: active ? () => {
            applyMove({ from: promoMove.from, to: promoMove.to, promotion: piece });
            setPromoMove(null);
          } : null,
          key: `promo:${color}:${piece}`
        }, /* @__PURE__ */ figma.widget.h(SVG, {
          src: PIECES_SVG[color][piece],
          height: 50,
          width: 50
        }));
      }));
    };
    const applyMove = (move) => {
      if (chess.move(move)) {
        setBoardFen(chess.fen());
        setSelected(null);
        if (computer) {
          const notification = figma.notify("Computing move...");
          waitForTask(new Promise((resolve) => {
            setTimeout(() => {
              const move2 = getBestMove(chess, chess.turn(), 0)[0];
              if (chess.move(move2)) {
                setBoardFen(chess.fen());
                setSelected(null);
                notification.cancel();
              } else {
              }
              resolve();
            }, 50);
          }));
        }
      } else {
        if (chess.in_check()) {
          figma.notify("You're in check! \u{1F62C}", { timeout: 2e3 });
        } else {
          figma.notify("Legal moves only, please! \u{1F60A}", { timeout: 2e3 });
        }
        setSelected(null);
      }
    };
    const isPromoMove = (move) => {
      const piece = chess.get(move.from);
      if (piece === null || (piece == null ? void 0 : piece.type) !== "p" || (piece == null ? void 0 : piece.color) !== chess.turn()) {
        return false;
      } else if ((piece == null ? void 0 : piece.color) === "w") {
        return move.to.charAt(1) === "8";
      } else {
        return move.to.charAt(1) === "1";
      }
    };
    const select = ({ row, column }) => {
      if (endGameCondition.length > 0) {
        return;
      }
      const position = indexToPositionString(row, column);
      if (selected && selected === position) {
        setSelected(null);
      } else if (selected) {
        const move = { from: selected, to: position };
        if (isPromoMove(move)) {
          setPromoMove(move);
          figma.notify("Promote your pawn!", { timeout: 2e3 });
        } else {
          applyMove(move);
        }
      } else {
        if (board[row][column] && board[row][column].color === chess.turn()) {
          setSelected(position);
        } else if (board[row][column]) {
          const color = chess.turn();
          figma.notify(`It's currently ${color === "b" ? "black" : "white"}'s turn`, { timeout: 2e3 });
        }
      }
    };
    const indexToPositionString = (row, column) => {
      return String.fromCharCode(97 + column) + (8 - row);
    };
    const boards = (computer ? ["w"] : ["w", "b"]).map((color) => {
      const flipped = color === "b";
      let flippedBoard;
      if (flipped) {
        flippedBoard = board.slice().reverse();
      } else {
        flippedBoard = board;
      }
      return /* @__PURE__ */ figma.widget.h(AutoLayout, {
        direction: "vertical",
        horizontalAlignItems: "center",
        verticalAlignItems: "center",
        height: "hug-contents",
        width: "hug-contents",
        key: `wrapper:${color}`
      }, promoMenu(color), /* @__PURE__ */ figma.widget.h(AutoLayout, {
        direction: "vertical",
        horizontalAlignItems: "center",
        verticalAlignItems: "center",
        height: "hug-contents",
        width: "hug-contents",
        cornerRadius: 30,
        key: `color:${color}`,
        stroke: "#000000",
        strokeWidth: chess.turn() === color ? 3 : 0
      }, flippedBoard.map((row, rowIndex) => {
        if (flipped) {
          rowIndex = 7 - rowIndex;
        }
        return /* @__PURE__ */ figma.widget.h(AutoLayout, {
          direction: "horizontal",
          horizontalAlignItems: "center",
          verticalAlignItems: "center",
          height: "hug-contents",
          width: "hug-contents",
          key: `row:${rowIndex}`
        }, row.map((cell, columnIndex) => /* @__PURE__ */ figma.widget.h(AutoLayout, {
          fill: selected && selected === indexToPositionString(rowIndex, columnIndex) ? "#F7F586" : (rowIndex + columnIndex) % 2 == 0 ? "#ECEED4" : "#78955B",
          onClick: cell || selected ? () => {
            select({
              row: rowIndex,
              column: columnIndex
            });
          } : null,
          key: `row:${rowIndex},col:${columnIndex}`
        }, cell ? /* @__PURE__ */ figma.widget.h(SVG, {
          src: PIECES_SVG[cell.color][cell.type],
          height: 100,
          width: 100
        }) : /* @__PURE__ */ figma.widget.h(Frame, {
          width: 100,
          height: 100
        }))));
      })));
    });
    return /* @__PURE__ */ figma.widget.h(AutoLayout, {
      direction: "vertical",
      horizontalAlignItems: "center",
      verticalAlignItems: "center",
      height: "hug-contents",
      width: "hug-contents",
      padding: 10
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      direction: "horizontal",
      horizontalAlignItems: "center",
      verticalAlignItems: "center",
      height: "hug-contents",
      width: "hug-contents",
      cornerRadius: 0,
      spacing: 120
    }, boards), endGameCondition.length > 0 && /* @__PURE__ */ figma.widget.h(AutoLayout, {
      width: "fill-parent",
      height: 200,
      verticalAlignItems: "end"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout, {
      direction: "horizontal",
      horizontalAlignItems: "center",
      verticalAlignItems: "center",
      width: "fill-parent",
      padding: 40,
      cornerRadius: 30,
      spacing: 120,
      fill: "#78955B"
    }, /* @__PURE__ */ figma.widget.h(Text, {
      fontSize: 70,
      fill: "#FFFFFF",
      fontFamily: "Andada"
    }, endGameCondition))));
  }
  widget.register(Chess3);
})();
/* @license
 * Copyright (c) 2017, Jeff Hlywa (jhlywa@gmail.com)
 * Released under the BSD license
 * https://github.com/jhlywa/chess.js/blob/master/LICENSE
 */
