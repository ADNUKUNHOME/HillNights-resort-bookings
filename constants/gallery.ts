import { GalleryImage } from "@/types/gallery";

export const GALLERY: GalleryImage[] = [
    // Interiors
    {
        id: 1,
        title: "Villa Living Area",
        category: "Interiors",
        src: "https://www.lakdi.com/cdn/shop/articles/villa-interior-design.jpg?v=1705058924&width=1920",
        thumb: "https://www.lakdi.com/cdn/shop/articles/villa-interior-design.jpg?v=1705058924&width=1920",
        alt: "Luxury living area interior"
    },
    {
        id: 2,
        title: "Suite Bedroom",
        category: "Interiors",
        src: "https://i.pinimg.com/originals/0f/91/01/0f91019b6ad473ebd9bde5a6bacfaaf3.jpg",
        thumb: "https://i.pinimg.com/originals/0f/91/01/0f91019b6ad473ebd9bde5a6bacfaaf3.jpg",
        alt: "Cozy bedroom interior"
    },

    // Exteriors
    {
        id: 3,
        title: "Hilltop View",
        category: "Exteriors",
        src: "https://t4.ftcdn.net/jpg/11/47/04/47/360_F_1147044746_R7xXc8HgEC10WTt6XOm6VkIJnlT8dRL4.jpg",
        thumb: "https://t4.ftcdn.net/jpg/11/47/04/47/360_F_1147044746_R7xXc8HgEC10WTt6XOm6VkIJnlT8dRL4.jpg",
        alt: "Panoramic hilltop view"
    },
    {
        id: 4,
        title: "Garden Path",
        category: "Exteriors",
        src: "https://t3.ftcdn.net/jpg/06/20/46/12/360_F_620461284_7h4ub26rBbfsGMEWZuYoeyhSGRHHBX4l.jpg",
        thumb: "https://t3.ftcdn.net/jpg/06/20/46/12/360_F_620461284_7h4ub26rBbfsGMEWZuYoeyhSGRHHBX4l.jpg",
        alt: "Tropical garden path"
    },

    // Pool
    {
        id: 5,
        title: "Infinity Pool",
        category: "Pool",
        src: "https://media.istockphoto.com/id/1067914214/photo/young-woman-having-a-night-swim-in-the-pool-in-malaysia.jpg?s=612x612&w=0&k=20&c=Yc7ZQxmt3_8kGEMnU097ZzFuMG_WXhB0T96hTaW5zT8=",
        thumb: "https://media.istockphoto.com/id/1067914214/photo/young-woman-having-a-night-swim-in-the-pool-in-malaysia.jpg?s=612x612&w=0&k=20&c=Yc7ZQxmt3_8kGEMnU097ZzFuMG_WXhB0T96hTaW5zT8=",
        alt: "Luxury infinity pool"
    },
    {
        id: 6,
        title: "Poolside Lounge",
        category: "Pool",
        src: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/2/1/0/OA19_Drew-Sivgals_Modern-Entertainment-Renovation_013.jpg.rend.hgtvcom.616.411.85.suffix/1549036939000.webp",
        thumb: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/2/1/0/OA19_Drew-Sivgals_Modern-Entertainment-Renovation_013.jpg.rend.hgtvcom.616.411.85.suffix/1549036939000.webp",
        alt: "Poolside lounge chairs"
    },

    // Dining
    {
        id: 7,
        title: "Rooftop Dining",
        category: "Dining",
        src: "https://images.squarespace-cdn.com/content/v1/5c366aecec4eb74ac5a2e0a5/3dec4712-44f6-4836-94f2-fd5f5207fd8e/Sora+Skybar+Malmaison+credit+Jack+Hardy+Photographer-min.jpg",
        thumb: "https://images.squarespace-cdn.com/content/v1/5c366aecec4eb74ac5a2e0a5/3dec4712-44f6-4836-94f2-fd5f5207fd8e/Sora+Skybar+Malmaison+credit+Jack+Hardy+Photographer-min.jpg",
        alt: "Rooftop dining setup"
    },
    {
        id: 8,
        title: "Breakfast With a View",
        category: "Dining",
        src: "https://www.shutterstock.com/shutterstock/videos/5066360/thumb/1.jpg?ip=x480",
        thumb: "https://www.shutterstock.com/shutterstock/videos/5066360/thumb/1.jpg?ip=x480",
        alt: "Breakfast table by window"
    },

    // Virtual Tour / 360 placeholder — mark is360 true; you can replace src with your own 360 link later
    {
        id: 9,
        title: "360° Resort Walkthrough",
        category: "Virtual",
        src: "https://images.prestigeonline.com/wp-content/uploads/sites/5/2024/04/10221200/431313100_17874505356049139_5206131842345222780_n-1-1.jpeg",
        thumb: "https://images.prestigeonline.com/wp-content/uploads/sites/5/2024/04/10221200/431313100_17874505356049139_5206131842345222780_n-1-1.jpeg",
        alt: "Virtual tour placeholder",
        is360: true
    }
];
