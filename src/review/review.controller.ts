import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { REVIEW_NOT_FOUND } from './review.constants';

@Controller('review')
export class ReviewController {

  constructor(private readonly reviewService: ReviewService) {}

  @UsePipes(new ValidationPipe())
  @Post('create')
    async create(@Body() dto: CreateReviewDto) {
      this.reviewService.createReview(dto)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deleteDoc = await this.reviewService.delete(id)
    if (!deleteDoc) {
      throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND)
    }
  }

  @Get('byProduct/:productId')
  async getByProductId(@Param('productId') productId: string) {
    return this.reviewService.findByProductId(productId)
  }

  @Get('all')
  async getAllReviews() {
    return this.reviewService.getAllReviews()
  }
}
