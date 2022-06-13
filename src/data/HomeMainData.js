const TYPES = [
  { id: 1,
    name: "Light-Sport Aircraft",
    icon: require("../images/home/main/vehicles/1.svg"),
    description:"Imperdiet diam pretium, vulputate porttitor egestas amet, urna, leo. Consectetur in ut dignissim ultricies in arcu. Ut nec turpis egestas odio quam nunc ante quis placerat. Orci augue eu quisque vulputate.",
    readMore: ""
  },
  {
    id: 2,
    name: "Turboprops",
    icon: require("../images/home/main/vehicles/2.svg"),
    description:"Imperdiet diam pretium, vulputate porttitor egestas amet, urna, leo. Consectetur in ut dignissim ultricies in arcu. Ut nec turpis egestas odio quam nunc ante quis placerat. Orci augue eu quisque vulputate.",
    readMore: ""
  },
  {
    id: 3,
    name: "Light-Sport Aircraft",
    icon: require("../images/home/main/vehicles/3.svg"),
    description:"Imperdiet diam pretium, vulputate porttitor egestas amet, urna, leo. Consectetur in ut dignissim ultricies in arcu. Ut nec turpis egestas odio quam nunc ante quis placerat. Orci augue eu quisque vulputate.",
    readMore: ""
  },
  {
    id: 4,
    name: "Light-Sport Aircraft",
    icon: require("../images/home/main/vehicles/4.svg"),
    description:"Imperdiet diam pretium, vulputate porttitor egestas amet, urna, leo. Consectetur in ut dignissim ultricies in arcu. Ut nec turpis egestas odio quam nunc ante quis placerat. Orci augue eu quisque vulputate.",
    readMore: ""
  },
  {
    id: 5,
    name: "Light-Sport Aircraft",
    icon: require("../images/home/main/vehicles/5.svg"),
    description:"Imperdiet diam pretium, vulputate porttitor egestas amet, urna, leo. Consectetur in ut dignissim ultricies in arcu. Ut nec turpis egestas odio quam nunc ante quis placerat. Orci augue eu quisque vulputate.",
    readMore: ""
  },
  {
    id: 6,
    name: "Helicopters",
    icon: require("../images/home/main/vehicles/6.svg"),
    description:"Imperdiet diam pretium, vulputate porttitor egestas amet, urna, leo. Consectetur in ut dignissim ultricies in arcu. Ut nec turpis egestas odio quam nunc ante quis placerat. Orci augue eu quisque vulputate.",
    readMore: ""
  },
  {
    id: 7,
    name: "Tricycle Gear Aircraft",
    icon: require("../images/home/main/vehicles/7.svg"),
    description:"Imperdiet diam pretium, vulputate porttitor egestas amet, urna, leo. Consectetur in ut dignissim ultricies in arcu. Ut nec turpis egestas odio quam nunc ante quis placerat. Orci augue eu quisque vulputate.",
    readMore: ""
  },
  {
    id: 8,
    name: "Single Engine Piston Aircraft",
    icon: require("../images/home/main/vehicles/8.svg"),
    description:"Imperdiet diam pretium, vulputate porttitor egestas amet, urna, leo. Consectetur in ut dignissim ultricies in arcu. Ut nec turpis egestas odio quam nunc ante quis placerat. Orci augue eu quisque vulputate.",
    readMore: ""
  },
  {
    id: 9,
    name: "Airbus",
    icon: require("../images/home/main/vehicles/9.svg"),
    description:"Imperdiet diam pretium, vulputate porttitor egestas amet, urna, leo. Consectetur in ut dignissim ultricies in arcu. Ut nec turpis egestas odio quam nunc ante quis placerat. Orci augue eu quisque vulputate.",
    readMore: ""
  },
  {
    id: 10,
    name: "Tricycle Gear Aircraft",
    icon: require("../images/home/main/vehicles/10.svg"),
    description:"Imperdiet diam pretium, vulputate porttitor egestas amet, urna, leo. Consectetur in ut dignissim ultricies in arcu. Ut nec turpis egestas odio quam nunc ante quis placerat. Orci augue eu quisque vulputate.",
    readMore: ""
  },
  {
    id: 11,
    name: "Amphibious",
    icon: require("../images/home/main/vehicles/11.svg"),
    description:"Imperdiet diam pretium, vulputate porttitor egestas amet, urna, leo. Consectetur in ut dignissim ultricies in arcu. Ut nec turpis egestas odio quam nunc ante quis placerat. Orci augue eu quisque vulputate.",
    readMore: ""
  },
  {
    id: 12,
    name: "Helicopters",
    icon: require("../images/home/main/vehicles/12.svg"),
    description:"Imperdiet diam pretium, vulputate porttitor egestas amet, urna, leo. Consectetur in ut dignissim ultricies in arcu. Ut nec turpis egestas odio quam nunc ante quis placerat. Orci augue eu quisque vulputate.",
    readMore: ""
  },
  {
    id: 13,
    name: "Tiltrotors",
    icon: require("../images/home/main/vehicles/13.svg"),
    description:"Imperdiet diam pretium, vulputate porttitor egestas amet, urna, leo. Consectetur in ut dignissim ultricies in arcu. Ut nec turpis egestas odio quam nunc ante quis placerat. Orci augue eu quisque vulputate.",
    readMore: ""
  },
  {
    id: 14,
    name: "Business Jets",
    icon: require("../images/home/main/vehicles/14.svg"),
    description:"Imperdiet diam pretium, vulputate porttitor egestas amet, urna, leo. Consectetur in ut dignissim ultricies in arcu. Ut nec turpis egestas odio quam nunc ante quis placerat. Orci augue eu quisque vulputate.",
    readMore: ""
  },
  {
    id: 15,
    name: "Business Jets",
    icon: require("../images/home/main/vehicles/15.svg"),
    description:"Imperdiet diam pretium, vulputate porttitor egestas amet, urna, leo. Consectetur in ut dignissim ultricies in arcu. Ut nec turpis egestas odio quam nunc ante quis placerat. Orci augue eu quisque vulputate.",
    readMore: ""
  },
  
]
const DESTINATIONS = [
  {
    id: 1,
    name: "Avellaneda",
    icon: require("../images/home/main/destinations/Avellaneda.jpg"),
  },
  {
    id: 2,
    name: "Cincinnati (OH)",
    icon: require("../images/home/main/destinations/Cincinnati.jpg"),
  },
  {
    id: 3,
    name: "Khabarovsk",
    icon: require("../images/home/main/destinations/Khabarovsk.jpg"),
  },
  {
    id: 4,
    name: "Baton Rouge (LA)",
    icon: require("../images/home/main/destinations/Baton-Rouge.jpg"),
  },
  {
    id: 5,
    name: "South Angelside",
    icon: require("../images/home/main/destinations/South-Angelside.jpg"),
  },
  {
    id: 6,
    name: "Fort Lauderdale",
    icon: require("../images/home/main/destinations/Fort-Lauderdale.jpg"),
  },
  {
    id: 7,
    name: "Chelyabinsk",
    icon: require("../images/home/main/destinations/Chelyabinsk.jpg"),
  },
  {
    id: 8,
    name: "Bahia Blanca",
    icon: require("../images/home/main/destinations/Bahia-Blanca.jpg"),
  }
  ,
  {
    id: 9,
    name: "South Angelside",
    icon: require("../images/home/main/destinations/South-Angelside.jpg"),
  },
  {
    id: 10,
    name: "Fort Lauderdale",
    icon: require("../images/home/main/destinations/Fort-Lauderdale.jpg"),
  },
  {
    id: 11,
    name: "Chelyabinsk",
    icon: require("../images/home/main/destinations/Chelyabinsk.jpg"),
  },
  {
    id: 12,
    name: "Bahia Blanca",
    icon: require("../images/home/main/destinations/Bahia-Blanca.jpg"),
  }
]
export {TYPES, DESTINATIONS}