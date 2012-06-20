function Template( html, object_s ){
	this.html = html,
	this.object_s = object_s,
	this.parser = function( obj ){
		var html = this.html;
		for( var i in obj ){
		// Create a regex out of object key and replace it with their values
			var reg = new RegExp( "\{" + i + "\}" , "g" );
			var html = html.replace( reg, obj[i] );
		}
		return html;
	},
	this.collection = function(){
		var output = [];
		for( var i = 0, l = this.object_s.length; i < l ;i++ ){
			output.push( this.parser(this.object_s[i]) );
		}
		return output.join( "" );
	},
	this.locals = function(){
		return this.parser( this.object_s );
	},
	this.render = function(){
	// This is Nasty
	 return ( this.object_s instanceof Array ) ? this.collection() : this.locals();
	}	
}
