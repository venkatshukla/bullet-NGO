'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\I334477\\Desktop\\Ethereum\\bulletproof_ngo\\pages\\index.js?entry';


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'renderCampaigns',
        value: function renderCampaigns() {
            var _this2 = this;

            var items = this.props.campaigns.map(function (address, index) {
                return {
                    header: _this2.props.names[index] + '  | Smart Contract Address:  ' + address,
                    description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30
                        }
                    }, 'View NGO')),
                    fluid: true,
                    extra: _react2.default.createElement(_semanticUiReact.Rating, { icon: 'star', defaultRating: 4, maxRating: 5, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 34
                        }
                    }),
                    color: 'teal'
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'Registered NGOs'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                floated: 'right',
                content: 'Register NGO',
                icon: 'add circle',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }))), this.renderCampaigns()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns, names;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;
                                _context.next = 5;
                                return _promise2.default.all(campaigns.map(function (address) {
                                    return _factory2.default.methods.getDeployedCampaignsName(address).call();
                                }));

                            case 5:
                                names = _context.sent;
                                return _context.abrupt('return', { campaigns: campaigns, names: names });

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJDYXJkIiwiQnV0dG9uIiwiUmF0aW5nIiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiYWRkcmVzcyIsImluZGV4IiwiaGVhZGVyIiwibmFtZXMiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwiZXh0cmEiLCJjb2xvciIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJhbGwiLCJnZXREZXBsb3llZENhbXBhaWduc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVMsQUFBTSxBQUFTOztBQUN4QixBQUFPLEFBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVEsQUFBVzs7Ozs7OztJQUdiLEE7Ozs7Ozs7Ozs7OzBDQWNnQjt5QkFFZDs7Z0JBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ3ZEOzs0QkFDWSxPQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsU0FBakIsQUFBeUIsa0NBRDlCLEFBQ2dFLEFBQ3ZFO2lEQUNJLEFBQUMsOEJBQUssdUJBQU4sQUFBMkI7c0NBQTNCO3dDQUFBLEFBQ0E7QUFEQTtxQkFBQSxrQkFDQSxjQUFBOztzQ0FBQTt3Q0FBQTtBQUFBO0FBQUEsdUJBSkcsQUFHSCxBQUNBLEFBR0E7MkJBUEcsQUFPSSxBQUNQOzJDQUFNLEFBQUMseUNBQU8sTUFBUixBQUFhLFFBQU8sZUFBcEIsQUFBbUMsR0FBRyxXQUF0QyxBQUFpRDtzQ0FBakQ7d0NBUkgsQUFRRyxBQUNOO0FBRE07cUJBQUE7MkJBUlYsQUFBTyxBQVNJLEFBRWQ7QUFYVSxBQUNIO0FBRlIsQUFBYyxBQWNkLGFBZGM7O2lEQWNQLEFBQUMsc0JBQUQsQUFBTSxTQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBR0YsQUFDTDttQ0FBTyxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNIO0FBREc7QUFBQSxhQUFBLGtCQUNILGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0o7QUFESTtBQUFBLCtCQUNKLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURJLEFBQ0osQUFDQSxvQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTs4QkFBWjtnQ0FBQSxBQUNDO0FBREQ7K0JBQ0MsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDRztBQURIO0FBQUEsK0JBQ0csQUFBQzt5QkFBRCxBQUNZLEFBQ1I7eUJBRkosQUFFWSxBQUNSO3NCQUhKLEFBR1UsQUFDTjt5QkFKSjs7OEJBQUE7Z0NBSkEsQUFFSixBQUNDLEFBQ0csQUFRRjtBQVJFO0FBQ0ksdUJBTlIsQUFBTyxBQUNILEFBWUYsQUFBSyxBQUdWOzs7Ozs7Ozs7Ozs7dUNBL0MyQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUJBQXVCLEEsQUFBdkM7O2lDQUFsQjtBOzt5REFFYyxBQUFRLGNBQUksQUFBVSxJQUFJLFVBQUEsQUFBQyxTQUFZLEFBQ3ZEOzJDQUFPLGtCQUFBLEFBQVEsUUFBUixBQUFnQix5QkFBaEIsQUFBeUMsU0FBaEQsQUFBTyxBQUFrRCxBQUN0RDtBLEFBRmEsQUFBWSxpQ0FBQSxDQUFaOztpQ0FBZDtBO2lFQUtDLEVBQUMsV0FBRCxXQUFXLE8sQUFBWDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVZhLEEsQUFvRDVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0kzMzQ0NzcvRGVza3RvcC9FdGhlcmV1bS9idWxsZXRwcm9vZl9uZ28ifQ==