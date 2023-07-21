"use strict";

app.StoneData_2 = {
	type: "Stone_2",
	image: new Image(),
	health:8,
}
app.StoneData_2.image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBDNUY5NEIyMjM0MDExRUVBODdCRDE3NDZFQzg1MERCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBDNUY5NEIzMjM0MDExRUVBODdCRDE3NDZFQzg1MERCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEM1Rjk0QjAyMzQwMTFFRUE4N0JEMTc0NkVDODUwREIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEM1Rjk0QjEyMzQwMTFFRUE4N0JEMTc0NkVDODUwREIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4oCrn/AAAAYFBMVEW6xMlia4NJUGpkj3CNmqZndYRHcFfK0tVhb4CVoaustr1canx+lZRXeGvBys7EzdFRgV1/i5lZh2GeprZEWV45N2BaZXxAR2KirbRvfIu1v8Rzgo1ge3ZVX3dAmUAAAABUD2zRAAAAIHRSTlP/////////////////////////////////////////AFxcG+0AAAD2SURBVHjazNPZboUgEIBhOOxQRY8buEzf/y07VJoq1Tbp1fkTL9TPZQyS9z8irwXYmvoFrDR1C5gLZCZkFusdoFZ5LIqfAACeY1fn5kd/AVYaVF17jxspAZ6WUzQ2A1ULN/UlGBCQ/ARbAMjAcKKUV144jQAPnkC/GN4GmxJUu74EAKyLbk9rqgFGbGNH8BapzlUVQJtiecydVDSXro8qvU83NAfQVF9JGds0jzJTlT81nJoepvN4CxX0NjwvATc2GNO1bpua44L5Bty0OIbDO8gLICXny/I5EO6dl1wmho/7RHeAsWYPv2e5aKHo1X6cf4IPAQYAdZ5m4yyRjd8AAAAASUVORK5CYII=";
app.stoneTypes.push(app.StoneData_2.type);

app.Stone_2 = function(){
	
	// Set up the stone
	function Stone_2(posX, posY){
		this.posX = posX;
		this.posY = posY;
		this.type = app.StoneData_2.type;
		this.health = app.StoneData_2.health;
		app.objects[posY][posX] = {o:this, r: 1};
	} // end Stone Constructor
	
	
	var p = Stone_2.prototype;
		
	// Draw the stone
	p.draw = function(ctx, O_W, O_H, E_W, E_H) {
		let image = app.StoneData_2.image;
		if(this.health!= app.StoneData_2.health && this.health>0){
			app.draw.line(ctx, new app.Vector((this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H - image.height/2), new app.Vector((this.posX-O_W)*app.t_s-E_W+image.width, (this.posY-O_H)*app.t_s-E_H - image.height/2), 4, "white");
			app.draw.line(ctx, new app.Vector((this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H - image.height/2), new app.Vector((this.posX-O_W)*app.t_s-E_W+image.width*this.health/app.StoneData_2.health, (this.posY-O_H)*app.t_s-E_H - image.height/2), 4, "red");
		}
		ctx.drawImage(image, (this.posX-O_W)*app.t_s-E_W, (this.posY-O_H)*app.t_s-E_H + app.t_s - image.height, image.width, image.height);
	};

	p.doAction = function() {
		app.trainer.workFrame = 1;
		this.health--;
		if(this.health<=0){
			app.stone += 5;
			app.objects[this.posY][this.posX] = null;
			delete this;
		}
	}
	
	return Stone_2; 
}();
