const element1 = document.createElement('div');
element1.className = 'text-block';
document.body.appendChild(element1);

const typed1 = new Typed(element1, {
    strings: ['TEXT GRADIENT'],
    typeSpeed: 100,
    loop: false,
    showCursor: true,
    contentType: 'html',
    cursorChar: '|',
    onComplete: function () {
        setTimeout(() => {
            const sub1 = document.createElement('div');
            sub1.className = 'gradient-text';
            sub1.innerHTML = 'make your gradient';
            element1.appendChild(sub1);

            const element2 = document.createElement('div');
            element2.className = 'text-block';
            document.body.appendChild(element2);

            const typed2 = new Typed(element2, {
                strings: ['Design is intelligence made visible'],
                typeSpeed: 100,
                loop: false,
                showCursor: true,
                contentType: 'html',
                cursorChar: '|',
                onComplete: function () {
                    setTimeout(() => {
                        const sub2 = document.createElement('div');
                        sub2.className = 'gradient-text';
                        sub2.innerHTML = 'Interaction design isn’t merely a matter of aesthetic choice; rather,it is based on an understanding of users and cognitive principles.';
                        element2.appendChild(sub2);

                        const element3 = document.createElement('div');
                        element3.className = 'text-block';
                        document.body.appendChild(element3);

                        const typed3 = new Typed(element3, {
                            strings: ['Netflix Splash Screen'],
                            typeSpeed: 100,
                            loop: false,
                            showCursor: true,
                            contentType: 'html',
                            cursorChar: '|',
                            onComplete: function () {
                                setTimeout(() => {
                                    const sub3 = document.createElement('div');
                                    sub3.className = 'gradient-text';
                                    sub3.innerHTML = 'N';
                                    element3.appendChild(sub3);
                                }, 500);
                            }
                        });
                    }, 500);
                }
            });
        }, 500);
    }
});
