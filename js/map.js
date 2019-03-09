(function ($) { 
	
	$( document ).ready(function(){
	
		var map;
		
		var myCenter=new google.maps.LatLng(50.44604025, 30.45425475);
		var myPosition1=new google.maps.LatLng(50.44604025, 30.45425475);
		
		var	zoom_state = 13;
					
		var MY_MAPTYPE_ID = 'custom_style';

		function initialize() {

			var featureOpts =[{"featureType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}];



			var mapProp = {
				center:myCenter,
				zoom:zoom_state,
				scrollwheel: true,
				mapTypeControlOptions: {
					mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID, MY_MAPTYPE_ID]
				},
				mapTypeId: MY_MAPTYPE_ID,
				disableDefaultUI: true
			};
			
			
			var map=new google.maps.Map(document.getElementById("map"),mapProp);
			var styledMapOptions = {
				name: 'GrayScale'
			};

			var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
			map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

			
			var marker1 = new google.maps.Marker({
				position: myPosition1
			});
			
			/*  Info Windows  */
			
			var infoCont1 = '<div class="contacts-tooltip"><div class="contacts-tooltip-title">Proecology</div></div>';
			// <div class="contacts-tooltip-info">Борщагівська 115</div>
			
			
			var infowindow1 = new google.maps.InfoWindow({
				content: infoCont1
			});
			
			google.maps.event.addListener(marker1, 'click', function() {
				infowindow1.open(map,marker1);
			});
			infowindow1.open(map,marker1);

			
			/*  Set markers   */
			marker1.setMap(map);
			

		}

		google.maps.event.addDomListener(window, 'load', initialize);


	});
})(jQuery);