(function () {
  var card = document.getElementById('card');
  var glare = card.querySelector('.card-glare');
  var MAX_TILT = 8;
  var FLIP_DURATION = 0.6;
  var isFlipped = false;
  var flipDirection = 1; // 1 = flipped from right (rotateY 180), -1 = from left (rotateY -180)

  function getTiltTransform(rotateX, rotateY) {
    var baseY = isFlipped ? (180 * flipDirection) : 0;
    return 'rotateX(' + rotateX + 'deg) rotateY(' + (baseY + rotateY) + 'deg)';
  }

  function onMouseEnter() {
    card.style.transition = 'transform 0.06s linear, box-shadow 0.06s linear';
  }

  function onMouseMove(e) {
    var rect = card.getBoundingClientRect();
    var dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    var dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

    var rotateY = dx * MAX_TILT;
    var rotateX = -dy * MAX_TILT;

    card.style.transform = getTiltTransform(rotateX, rotateY);

    var magnitude = Math.min(Math.sqrt(dx * dx + dy * dy), 1);
    var angle = Math.atan2(dx, -dy) * (180 / Math.PI);
    var shadow = (magnitude * 0.22).toFixed(3);
    var shine  = (magnitude * 0.07).toFixed(3);

    var glareX = ((e.clientX - rect.left) / rect.width) * 100;
    var glareY = ((e.clientY - rect.top) / rect.height) * 100;
    glare.style.background = [
      'radial-gradient(circle at ' + glareX + '% ' + glareY + '%, rgba(0,0,0,0.12) 0%, transparent 55%)',
      'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + shine + ') 0%, transparent 45%, rgba(0,0,0,' + shadow + ') 100%)'
    ].join(', ');
    glare.style.opacity = '1';
  }

  function onMouseLeave() {
    card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease';
    card.style.transform = getTiltTransform(0, 0);
    glare.style.opacity = '0';
  }

  function flipCard(e) {
    if (isFlipped) {
      flipDirection = 1; // reset for next flip; unflip always returns to 0
    } else {
      var rect = card.getBoundingClientRect();
      var clickX = e.clientX - rect.left;
      flipDirection = clickX < rect.width / 2 ? -1 : 1; // left half = flip left (-180), right = flip right (180)
    }
    isFlipped = !isFlipped;
    card.classList.toggle('is-flipped', isFlipped);
    card.style.transition = 'transform ' + FLIP_DURATION + 's cubic-bezier(0.16, 1, 0.3, 1)';
    card.style.transform = getTiltTransform(0, 0);
  }

  card.addEventListener('click', function (e) {
    if (e.target.closest('[data-no-flip]')) return;
    flipCard(e);
  });

  card.addEventListener('mouseenter', onMouseEnter);
  card.addEventListener('mousemove', onMouseMove);
  card.addEventListener('mouseleave', onMouseLeave);

  card.addEventListener('touchmove', function (e) {
    e.preventDefault();
    onMouseMove(e.touches[0]);
  }, { passive: false });

  card.addEventListener('touchend', onMouseLeave);
}());
