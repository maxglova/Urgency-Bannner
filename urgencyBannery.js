// Urgency Banners
// Originally Created for the 2020 Pantheon Site

function bannerCollapse() {
    document.getElementById('toggle-btn').addEventListener('click', function(){
        var bannerWrap = document.getElementById('banner-wrap');
        bannerWrap.classList.toggle('hide', 'transition');
        console.log('it worked!')
    });
 }
