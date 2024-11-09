<script>
   window.onscroll = function() {
      var scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (scrolled > 550) {
         // Если страница прокручена вниз более, чем на 550 пикселей,
         // выводим кнопку на экран
         document.getElementById('arrow').style.display = 'block';
      } else {
         // В противном случае убираем кнопку с экрана
         document.getElementById('arrow').style.display = 'none';
      }
   }
</script>