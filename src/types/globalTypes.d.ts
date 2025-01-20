export interface newRecipe {
    id: string;
    textOne: string;
    textTwo: string;
    srcImg: string;
    rate: number;
    portions: number;
    preparationTime: number;
    difficulty: string;
};

export interface NavbarView {
    id: string;    
    text: string;  
    shortText: string;
    image: React.ReactNode; 
};

export interface SvgIconProps {
    color?: string;
};