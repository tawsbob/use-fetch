"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useFetch = function (_a) {
    var _b = _a === void 0 ? {
        loadingState: undefined,
        responseState: undefined,
        errorState: undefined
    } : _a, loadingState = _b.loadingState, responseState = _b.responseState, errorState = _b.errorState;
    var loadingLocalState = (0, react_1.useState)(false);
    var responseLocalState = (0, react_1.useState)(null);
    var errorLocalState = (0, react_1.useState)(null);
    var _c = loadingState !== null && loadingState !== void 0 ? loadingState : loadingLocalState, loading = _c[0], setLoading = _c[1];
    var _d = responseState !== null && responseState !== void 0 ? responseState : responseLocalState, response = _d[0], setResponse = _d[1];
    var _e = errorState !== null && errorState !== void 0 ? errorState : errorLocalState, error = _e[0], setError = _e[1];
    var call = (0, react_1.useCallback)(function (url, options) { return __awaiter(void 0, void 0, void 0, function () {
        var response_1, data, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, 4, 5]);
                    setLoading(true);
                    return [4 /*yield*/, fetch(url, options)];
                case 1:
                    response_1 = _b.sent();
                    return [4 /*yield*/, response_1.json()];
                case 2:
                    data = (_a = (_b.sent())) !== null && _a !== void 0 ? _a : {};
                    setResponse(data);
                    return [2 /*return*/, data];
                case 3:
                    error_1 = _b.sent();
                    setError(error_1);
                    return [2 /*return*/, {}];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [setError, setLoading, setResponse]);
    return {
        loading: loading,
        response: response,
        error: error,
        call: call
    };
};
exports.default = useFetch;
