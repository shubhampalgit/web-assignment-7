var index = 0;
        function change() {
            var colors = ["red", "cyan", "pink", "orange", "lightblue", "purple", "green"];
            document.getElementsByTagName("body")[0].style.background = colors[index++];
            if (index > colors.length) {
                index = 0;
            }
        }