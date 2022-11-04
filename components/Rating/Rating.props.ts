import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RatingProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLUListElement>,
        HTMLUListElement
    > {}

export interface SumRatingProps {
    rating: number;
    userRating?: never;
    setRating?: never;
}

export interface UserRatingProps {
    userRating: number;
    setRating: (rating: number) => void;
    rating?: never;
}
