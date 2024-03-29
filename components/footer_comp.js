Vue.component('footer_comp', {
    template: `<div class="footer">
    <div class="feedback">
        <div class="container feedbackBlock">
            <div class="feedbackBlock__comment">
                <img src="images/portret.png" alt="foto_client">
                <p>“Vestibulum quis porttitor dui! Quisque viverra
                    nunc mi, <i>a pulvinar purus condimentum</i> “</p>
            </div>
            <div class="feedbackBlock__subscribe">
                <h3>SUBSCRIBE <br> <span>FOR OUR NEWLETTER AND
                        PROMOTION</span>
                </h3>
                <form class="b-feedbackBlock__form" action="#">
                    <input id="subscribeName" type="text" placeholder="Enter Your Name">
                    <input id="subscribePhone" type="phone" placeholder="Enter Your Phone">
                    <input id="subscribeEmail" type="email" placeholder="Enter Your Email">
                    <button class="b-feedbackBlock__button">Subscribe</button>
                </form>
            </div>
        </div>
    </div>
    <div class="footer__copy">
        <div class="container footer__container">
            <div class="footer__copyText">
                <p>&copy; 2021 Brand All Rights Reserved.</p>
            </div>
            <div class="b-footer__social">
                <a class="b-footer__socialIcon" href="#"><img src="images/facebook.svg" alt="icon"></a>
                <a class="b-footer__socialIcon" href="#"><img src="images/insta.svg" alt="icon"></a>
                <a class="b-footer__socialIcon" href="#"><img src="images/pinterest.svg" alt="icon"></a>
                <a class="b-footer__socialIcon" href="#"><img src="images/tweeter.svg" alt="icon"></a>
            </div>
        </div>
    </div>
</div>`
})