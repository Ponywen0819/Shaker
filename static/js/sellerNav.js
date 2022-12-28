var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function Nav() {
    var _React$useState = React.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        accInfoIsTouched = _React$useState2[0],
        setaccIsTouched = _React$useState2[1];

    function pullDownMenu() {
        setaccIsTouched(!accInfoIsTouched);
    }
    return React.createElement(
        'div',
        { className: 'nav-container' },
        React.createElement(
            'div',
            { className: 'nav-content' },
            React.createElement(
                'a',
                { href: './test', className: 'nav-logo' },
                React.createElement('img', { src: '/static/img/logo2.png' })
            ),
            React.createElement(
                'div',
                { className: 'nav-logo-content', onMouseEnter: accInfoIsTouched ? pullDownMenu : "" },
                React.createElement(
                    'a',
                    { href: 'this para. should be filled the anchor link', className: 'nav-text' },
                    ' \u8CE3\u5BB6\u4E2D\u5FC3'
                )
            ),
            React.createElement(
                'div',
                { style: { position: 'relative' } },
                React.createElement(
                    'div',
                    { className: 'pop-over' },
                    React.createElement(
                        'div',
                        { className: 'pop-over _ref' },
                        React.createElement(
                            'div',
                            { className: 'account-info-box' },
                            React.createElement(
                                'div',
                                { className: 'account-info', onClick: pullDownMenu },
                                React.createElement('img', { src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAABJlBMVEXP2NxgfYtjf412j5uMoavO19uis7vG0dVxi5fBzNJyjJhjgI56kp5hfoxxi5h5kZ2ouL9ohJGInaipucCHnah3kJyxv8bL1NnM1dlphJGXqrN4kZzM1tqUp7Gnt76InqlkgY6wvsWGnKdrhpOnuL+xwMZ8lJ+3xMvAzNGCmaTFz9Sdr7fN1trN19tlgY5qhZJkgI6/y9COoqzL1dlphJJ0jZp7k566x8y7x81ng5CywMegsrp4kZ14kJyhs7uJn6nH0dZlgY+Fm6bG0daWqrO2xMqzwcfF0NXBzdK3xcu0wsh7k5+qusG0wsmzwchuiJVviZaYq7S7yM2Kn6m8yM6/y9GInqiWqbKNoqxzjJmjtLyqucGfsbmdr7iwv8WKoKpuiZVif42PQ9RwAAABzUlEQVR4Xu3YVZLjShBA0UyBmZmamXuYmZmZ3tv/Jua3Y8JWTdsKKR1zzwruR1aVlDIdAAAAAAAAAAAAAAAAAADyN1t+3fPqfiOTl7kQ1qp6QqkZinmdnP6hcFVs6wY6RtATwx75OlY7K2ZlczpBzmx194ZONOyKTbc0QiAmrWikFTHoIKeRKgdiz7o6LIo919XhophzRp3yYs01dcqINavqtCTWXFAnX6y5ok7nxZqyOhWJNjAeHERzVx6Py7Y6PRZzqnP4wSQ1dajN4U9AIRSDOhqpIyYFGuGs2HRuqBMNR/O3rKlYXjG1dazhbTGsF4yd557YtlFwrHpNCpslPeHZ81DmQj7T8OvFYt9vfM3LPwkAgOzDzMLdUqV/qHqnXymtLmRe3hPD9h/s7RzpGEc7e1v7Yk+4dX/zWCMsbw6eiClPgzV107XPL8SI3cEr/Wuv3+xK+t4ueXoq3rv3kq4PrbKeWvnjtqRn9MnTqXiDkaTkUkGn9uWypKK5rDM4/CYp+K4z+iGJW9SZrSc+z57OzEt6rtsag6ok6qfGYkOS1NJY/JIk/aexyEmS/tdYHEuSNCbzGU000UQTTTQAAAAAAAAAAAAAAAAAAL8BwZgl987F+p8AAAAASUVORK5CYII=', className: 'account-avatar' }),
                                React.createElement(
                                    'span',
                                    { className: 'account-name' },
                                    'account name'
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'pulldown-container', style: { display: '' + (accInfoIsTouched ? 'block' : 'none') } },
                        React.createElement(
                            'div',
                            { className: 'menu', onMouseLeave: pullDownMenu },
                            React.createElement(
                                'ul',
                                null,
                                React.createElement(
                                    'li',
                                    { className: 'account-dropdown-item' },
                                    React.createElement(
                                        'span',
                                        { className: 'pull-down-menu text' },
                                        '\u8CE3\u5834\u4E2D\u5FC3'
                                    )
                                )
                            ),
                            React.createElement(
                                'ul',
                                null,
                                React.createElement(
                                    'li',
                                    { className: 'account-dropdown-item' },
                                    React.createElement(
                                        'span',
                                        { className: 'pull-down-menu text' },
                                        '\u767B\u51FA'
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}