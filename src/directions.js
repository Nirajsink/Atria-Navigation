const directions = {
    "CSE HOD Cabin": {
      "Principal Office": [
        { icon: "fa-door-open", text: "From the cabin take a left" },
        { icon: "fa-walking", text: "take lift or Stairs to ground floor" },
        { icon: "fa-arrow-left", text: "After Reaching Ground floor take a left" },
        { icon: "fa-building", text: "Go staright and you will see Princial Office on your left" }
      ],
      "Seminar Hall": [
        { icon: "fa-door-open", text: "From the cabin take a left" },
        { icon: "fa-arrow-right", text: "take lift or Stairs to ground floor" },
        { icon: "fa-walking", text: "After Reaching Ground floor go staright for 100 meters" },
        { icon: "fa-utensils", text: "Seminar Hall will be on your left" }
      ],
      "MBA Department": [
        { icon: "fa-arrow-right", text: "From the cabin take a left" },
        { icon: "fa-arrow-left", text: "take lift or Stairs to Fourth floor" },
        { icon: "fa-utensils", text: "After Reaching Fourth floor go staright for 500 meters you will reach MBA department" },
        
      ],
      "Restroom": [
        { icon: "fa-door-open", text: "From the cabin take a left" },
        { icon: "fa-arrow-right", text: "Wlk for 100 meters" },
        { icon: "fa-walking", text: "Restroom will be on your left" },
      ]
    },
    "MBA Department": {
      "CSE HOD Cabin": [
        { icon: "fa-arrow-right", text: "From the department take nearby stair or Elevator" },
        { icon: "fa-arrow-left", text: "Go to Third floor" },
        { icon: "fa-utensils", text: "After reaching third floor take left and move till the end" },
        { icon: "fa-arrow-left", text: "HOD cabin will be on your right" }
      ],
      "Seminar Hall": [
        { icon: "fa-arrow-right", text: "From the department take nearby stair or Elevator" },
        { icon: "fa-arrow-left", text: "Go to ground floor" },
        { icon: "fa-walking", text: "After Reaching Ground floor take right and walk staright to library" },
        { icon: "fa-utensils", text: "From library take a left and walk 200 meters you will reach Seminar Hall" }
      ],
      "Restroom": [
        { icon: "fa-door-open", text: "From the Department take a right " },
        { icon: "fa-arrow-right", text: "Walk for 100 meters" },
        { icon: "fa-walking", text: "Restroom on the right" },
      ]
    },
    "Seminar Hall": {
      "CSE HOD Cabin": [
        { icon: "fa-door-open", text: "From the hall take a right and walk staright" },
        { icon: "fa-walking", text: "Take stairs or Elevator to Third floor" },
        { icon: "fa-building", text: "After Reaching Third floor take a right" },
        { icon: "fa-arrow-left", text: "Walk staright HOD cabin will be on your right" }
      ],
      "MBA Department": [
        { icon: "fa-door-open", text: "From the hall take a right and walk staright" },
        { icon: "fa-walking", text: "Take stairs or Elevator to Fourth floor" },
        { icon: "fa-arrow-left", text: "After Reaching Fourth floor take a left and walk straight" },
        { icon: "fa-building", text: "MBA department board will be on your right" }
      ],
      "Restroom": [
        { icon: "fa-door-open", text: "From the hall take a right and walk staright" },
        { icon: "fa-walking", text: "Restroom will be on your right" },
      ]
    }
  };
  
  export default directions;
  