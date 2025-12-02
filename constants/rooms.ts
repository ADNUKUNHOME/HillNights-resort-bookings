import { Room } from "@/types/rooms";

export const ROOMS: Room[] = [
    {
        id: 1,
        name: "Hilltop Villa",
        category: "Villa",
        description: "A luxury villa with panoramic valley views and private balcony.",
        pricePerNight: "₹12,000",
        capacity: 4,
        image: "https://t4.ftcdn.net/jpg/11/47/04/47/360_F_1147044746_R7xXc8HgEC10WTt6XOm6VkIJnlT8dRL4.jpg",
        amenities: ["Private Balcony", "Valley View", "King Bed", "WiFi"]
    },
    {
        id: 2,
        name: "Forest Cottage",
        category: "Cottage",
        description: "Cozy cottage surrounded by spice gardens, perfect for couples.",
        pricePerNight: "₹6,500",
        capacity: 2,
        image: "https://images.stockcake.com/public/1/6/0/160ad2f5-373c-4055-afaf-aa11b3516fb2_large/enchanted-forest-cottage-stockcake.jpg",
        amenities: ["Garden View", "Queen Bed", "Fireplace", "WiFi"]
    },
    {
        id: 3,
        name: "Luxury Tent",
        category: "Tent",
        description: "A glamping tent experience with comfort and adventure.",
        pricePerNight: "₹4,800",
        capacity: 2,
        image: "https://i.pinimg.com/736x/5b/8c/d6/5b8cd6a5bc0150f0174300587894cae7.jpg",
        amenities: ["Campfire", "Double Bed", "Outdoor Seating"]
    },
    {
        id: 4,
        name: "Presidential Suite",
        category: "Luxury",
        description: "Top-tier suite with living area, jacuzzi, and mountain views.",
        pricePerNight: "₹20,000",
        capacity: 6,
        image: "https://www.sofitel-seoul.com/wp-content/uploads/sites/252/2022/01/Sofitel-Ambassador-Seoul-Presidential-Suite_living-room01-Copy-1170x780.jpg",
        amenities: ["Jacuzzi", "Mountain View", "Living Area", "WiFi", "Mini Bar"]
    },
    {
        id: 5,
        name: "Skyline Penthouse",
        category: "Luxury",
        description: "A rooftop penthouse with panoramic skylines and private pool.",
        pricePerNight: "₹25,000",
        capacity: 4,
        image: "https://luxuryescapes.capetown/wp-content/uploads/2021/04/skyline-penthouse-ctle.jpg",
        amenities: ["Private Pool", "City View", "Jacuzzi", "Mini Bar", "WiFi"]
    },
    {
        id: 6,
        name: "Lakefront Retreat",
        category: "Cottage",
        description: "Charming cottage by the lakeside with private deck access.",
        pricePerNight: "₹8,000",
        capacity: 3,
        image: "https://q-xx.bstatic.com/xdata/images/hotel/max500/502984810.jpg?k=e3d805a4fc17b6faa5c75282886322912fb69f90a932e8a12efccfbadcccbbaf&o=",
        amenities: ["Lake View", "Private Deck", "King Bed", "WiFi"]
    },
    {
        id: 7,
        name: "Garden Bungalow",
        category: "Villa",
        description: "Peaceful bungalow surrounded by lush tropical gardens.",
        pricePerNight: "₹7,500",
        capacity: 2,
        image: "https://pix10.agoda.net/hotelImages/7025887/0/0bf1018806de3a591837c222190809d4.jpeg?ce=0&s=414x232",
        amenities: ["Garden View", "Private Patio", "Queen Bed", "WiFi"]
    }
];
