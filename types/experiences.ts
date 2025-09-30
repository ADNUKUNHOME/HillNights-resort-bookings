export interface Experience {
    id: number;
    title: string;
    description: string;
    image: string;
    duration: string;
    difficulty: "Easy" | "Moderate" | "Challenging";
    price: string;
    category: "Adventure" | "Cultural" | "Relaxation" | "Wildlife";
    highlights: string[];
}