'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\I334477\\Desktop\\Ethereum\\bulletproof_ngo\\pages\\campaigns\\new.js?entry';


var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimumContribution: '',
            name: '',
            gstin: '',
            errorMessage: '',
            loading: false,
            percentD: 100
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts, retobj;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errorMessage: '' });

                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _factory2.default.methods.createCampaign(_this.state.minimumContribution, _this.state.name, _this.state.gstin).send({ from: accounts[0] });

                            case 8:
                                retobj = _context.sent;

                                console.log(retobj.blockHash);

                                _routes.Router.pushRoute('/');
                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 16:
                                _this.setState({ loading: false });

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Register an NGO'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('label', { style: { color: '#FFF' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'NGO Name'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.name,
                onChange: function onChange(event) {
                    return _this3.setState({ name: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }), _react2.default.createElement('label', { style: { color: '#FFF' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'GSTIN Number'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.gstin,
                onChange: function onChange(event) {
                    return _this3.setState({ gstin: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }), _react2.default.createElement('label', { style: { color: '#FFF' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'wei',
                labelPosition: 'right',
                value: this.state.minimumContribution,
                onChange: function onChange(event) {
                    return _this3.setState({ minimumContribution: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'Create!')), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }), _react2.default.createElement(_semanticUiReact.Progress, { disabled: !this.state.loading, percent: this.state.percentD, indicating: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement('label', { style: { color: '#FFF' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, 'Deployting to Ethereum blockchain')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJQcm9ncmVzcyIsIkxheW91dCIsImZhY3RvcnkiLCJ3ZWIzIiwiUm91dGVyIiwiQ2FtcGFpZ25OZXciLCJzdGF0ZSIsIm1pbmltdW1Db250cmlidXRpb24iLCJuYW1lIiwiZ3N0aW4iLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwicGVyY2VudEQiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlQ2FtcGFpZ24iLCJzZW5kIiwiZnJvbSIsInJldG9iaiIsImNvbnNvbGUiLCJsb2ciLCJibG9ja0hhc2giLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwiY29sb3IiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFPLEFBQVM7O0FBQ3ZDLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBYTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7Ozs7OzswTixBQUVGO2lDQUFRLEFBQ2dCLEFBQ3BCO2tCQUZJLEFBRUMsQUFDTDttQkFISSxBQUdFLEFBQ047MEJBSkksQUFJUyxBQUNiO3FCQUxJLEFBS0ksQUFDUjtzQkFOSSxBLEFBTUs7QUFOTCxBQUNKLGlCQVNKLEE7aUdBQVcsaUJBQUEsQUFBTSxPQUFOOzhCQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQU0sQUFDTjtzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVMsTUFBSyxjQUZyQixBQUVQLEFBQWMsQUFBMkI7O2dEQUZsQztnREFBQTt1Q0FLb0IsY0FBQSxBQUFLLElBTHpCLEFBS29CLEFBQVM7O2lDQUExQjtBQUxILG9EQUFBO2dEQUFBO3VDQU1nQixrQkFBQSxBQUFRLFFBQVIsQUFDbEIsZUFBZSxNQUFBLEFBQUssTUFERixBQUNRLHFCQUFvQixNQUFBLEFBQUssTUFEakMsQUFDdUMsTUFBSyxNQUFBLEFBQUssTUFEakQsQUFDdUQsT0FEdkQsQUFFbEIsS0FBSyxFQUFDLE1BQU0sU0FSVixBQU1nQixBQUViLEFBQU8sQUFBUzs7aUNBRmxCO0FBTkQsa0RBVUg7O3dDQUFBLEFBQVEsSUFBSSxPQUFaLEFBQW1CLEFBRXZCOzsrQ0FBQSxBQUFPLFVBWkEsQUFZUCxBQUFpQjtnREFaVjtBQUFBOztpQ0FBQTtnREFBQTtnRUFjSDs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYyxZQWQxQixBQWNILEFBQWMsQUFBbUI7O2lDQUVqQztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQWhCWixBQWdCSCxBQUFjLEFBQVU7O2lDQWhCckI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0FtQkY7eUJBQ1Q7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0o7QUFESTtBQUFBLGFBQUEsa0JBQ0osY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREksQUFDSixBQUNBLG9DQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQSxXQUFPLE9BQU8sRUFBQyxPQUFmLEFBQWMsQUFBUTs4QkFBdEI7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSw2QkFBQSxBQUFDO3VCQUNNLEtBQUEsQUFBSyxNQURaLEFBQ2tCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMsTUFBTSxNQUFBLEFBQU0sT0FBcEMsQUFBUyxBQUFjLEFBQW9CO0FBRnJEOzhCQUFBO2dDQUZKLEFBRUksQUFJQztBQUpEO0FBQ0EsZ0NBR0MsY0FBQSxXQUFPLE9BQU8sRUFBQyxPQUFmLEFBQWMsQUFBUTs4QkFBdEI7Z0NBQUE7QUFBQTtlQU5MLEFBTUssQUFDRCxpQ0FBQSxBQUFDO3VCQUNNLEtBQUEsQUFBSyxNQURaLEFBQ2tCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxNQUFBLEFBQU0sT0FBckMsQUFBUyxBQUFjLEFBQXFCO0FBRnREOzhCQUFBO2dDQVBKLEFBT0ksQUFJQTtBQUpBO0FBQ0EsZ0NBR0EsY0FBQSxXQUFPLE9BQU8sRUFBQyxPQUFmLEFBQWMsQUFBUTs4QkFBdEI7Z0NBQUE7QUFBQTtlQVhKLEFBV0ksQUFDQSx5Q0FBQSxBQUFDO3VCQUFELEFBQ00sQUFDTjsrQkFGQSxBQUVjLEFBQ2Q7dUJBQU8sS0FBQSxBQUFLLE1BSFosQUFHa0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxxQkFBcUIsTUFBQSxBQUFNLE9BQW5ELEFBQVMsQUFBYyxBQUFtQztBQUpwRTs4QkFBQTtnQ0FiUixBQUNJLEFBWUksQUFPQTtBQVBBO0FBQ0EsaUNBTUEsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEOzhCQUFsRDtnQ0FwQlIsQUFvQlEsQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQzs4QkFBQTtnQ0FBQTtBQUFBO2VBdkJKLEFBRUosQUFxQlEsQUFHUjs7OEJBQUE7Z0NBMUJJLEFBMEJKLEFBQ1E7QUFEUjtBQUFBLGdDQUNRLEFBQUMsMkNBQVMsVUFBVSxDQUFDLEtBQUEsQUFBSyxNQUExQixBQUFnQyxTQUFTLFNBQVMsS0FBQSxBQUFLLE1BQXZELEFBQTZELFVBQVcsWUFBeEU7OEJBQUE7Z0NBQUEsQUFDQTtBQURBOytCQUNBLGNBQUEsV0FBTyxPQUFPLEVBQUMsT0FBZixBQUFjLEFBQVE7OEJBQXRCO2dDQUFBO0FBQUE7ZUE3QlIsQUFDSSxBQTJCSSxBQUNBLEFBSVA7Ozs7O0FBakVxQixBLEFBb0UxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSTMzNDQ3Ny9EZXNrdG9wL0V0aGVyZXVtL2J1bGxldHByb29mX25nbyJ9