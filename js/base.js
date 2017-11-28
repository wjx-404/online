var base="http://39.108.86.28/House";


//图片转换成Base64
			function getBase64Image(img) {
				var canvas = document.createElement("canvas");
				var width = img.width;
				var height = img.height;
				if(width > height) {
					if(width > 200) {
						height = Math.round(height *= 200 / width);
						width = 200;
					}
				} else {
					if(height > 200) {
						width = Math.round(width *= 200 / height);
						height = 200;
					}
				}
				canvas.width = width;
				canvas.height = height;
				var ctx = canvas.getContext("2d");
				ctx.drawImage(img, 0, 0, width, height);
				var dataURL = canvas.toDataURL("image/png");
				return dataURL.replace("data:image/png;base64,", "");
			}