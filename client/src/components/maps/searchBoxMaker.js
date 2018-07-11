import React, { Component } from 'react'; 
import {  
     
    withGoogleMap, 
    GoogleMap, 
    Marker 
} from 'react-google-maps'; 
import { SearchBox } from 'react-google-maps/lib/components/places/SearchBox'; 
 
const refs = {} 
const google = window.google; 
class aSearchBoxFeature extends Component { 
 
 
    constructor(props){ 
        super(props); 
        this.state= { 
            bounds: null, 
            markers: [], 
            places: [], 
        } 
    } 
       
 
            searchBoxMaker = () => { 
                const refs = {  } 
               
                this.setState({ 
                  bounds: null, 
                  oonMapMounted: ref => { 
                    refs.map = ref; 
                  }, 
               
                  onBoundsChanged: () => { 
                    this.setState({ 
                      bounds: refs.map.getBounds() 
                    }) 
                  }, 
                  onSearchBoxMounted: ref => { 
                    refs.searchBox = ref; 
                  }, 
                  onPlacesChanged: () => { 
                    const places = refs.searchBox.getPlaces(); 
                    const bounds = new google.map.LatLngBounds(); 
                    places.forEach(place =>{ 
                      if (place.geometry.viewport) { 
                        bounds.union(place.geometry.location) 
                      } else { 
                        bounds.extend(place.geometry.location) 
                      } 
                    }); 
               
                    const nextMarkers = places.map(place=>({ 
                      position: place.geometry.location, 
                    })); 
               
                    this.setState({ 
                      markers: nextMarkers, 
                    }) 
               
                  }, //onPlacesChanged  
               
                }) 
               
                //state isnt being update after we render the places 
                this.searchBoxMaker(); 
               
              }//searchbox 
 
            // onMapMounted: ref => { 
            //     refs.map = ref; 
            // }, 
            // onBoundsChanged: () => { 
            //     this.setState({ 
            //         bounds: refs.map.getBounds() 
            //     }) 
            // }, 
            // onPlacesChanged: () => { 
            //     const places = refs.searchBox.getPlaces(); 
            //     const bounds = new google.maps.LatLngBounds(); 
 
            //     places.forEach(place => { 
            //         if (place.geometry.viewporrt){ 
            //             bounds.union(place.geometry.viewport) 
            //         } else { 
            //             bounds.extend(place.geometry.location) 
            //         } 
            //     }); 
 
            //     const nextMarkers = places.map(place => ({ 
            //         position:place.geometry.location, 
            //     })); 
 
            //     this.setState({ 
            //         markers: nextMarkers, 
            //     }); 
 
            // } // onPlacesChanged 
        
 
 
    render(){ 
        const SearchBoxMaker = withGoogleMap(props => ( 
            
        <div>

            <SearchBox 
            ref={props.onSearchBoxMounted} 
            bounds={props.center} 
            controlPosition={google.maps.ControlPosition.TOP_LEFT} 
            onPlacesChanged={props.onPlacesChanged} 
            > 

            </SearchBox> 
 
        </div>

   
        )); 
        if (this.state.center === null) { 
            return (<div>Loading...</div>); 
          } else { 
             return( 
                 <div style={{ height: '100vh', width: '100%' }}> 
                   <SearchBoxMaker 
                    
                   /> 
                   {/* <button onClick={() => console.log(this.state)}>click me</button> */} 
                 </div> 
             ); 
          } 
}} 
 
    export default aSearchBoxFeature;