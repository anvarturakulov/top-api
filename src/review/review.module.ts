import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Review, ReviewSchema } from './models/review.model';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService],
  imports: [MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }])]
})
export class ReviewModule {}
