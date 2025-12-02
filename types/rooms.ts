export interface Room {
    id: number;
    name: string;
    category: "Villa" | "Cottage" | "Tent" | "Luxury";
    description: string;
    pricePerNight: string;
    capacity: number;
    image: string;
    amenities: string[];
}
