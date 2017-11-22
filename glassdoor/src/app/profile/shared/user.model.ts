import { Review } from '../../companies/reviews/shared/review.model';

export class User {
  _id: string;
  username: string;
  reviews: Review[]
}