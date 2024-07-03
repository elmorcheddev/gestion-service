package com.choufli7al.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.choufli7al.model.Competance;
import com.choufli7al.model.Review;
import com.choufli7al.service.CompetanceService;
import com.choufli7al.service.ReviewService;
 
@RestController
@RequestMapping(value = "/api/review")
public class ReviewController {
@Autowired
private ReviewService reviewService ;
@Autowired
private CompetanceService competanceService ;
@GetMapping(value = "/listreviewByComp/{id}")
private List<Review> listReviewsByComp(@PathVariable Long id){
	Competance competance = competanceService.findByIdCompetance(id);
	return reviewService.findByCompetance(competance);
}
@GetMapping("/rating/{id}")
public Double getAverageRating(@PathVariable Long id) {
    return reviewService.getAverageRating(id);
}
@PostMapping("/saveReview")
public Review addNewCommentaire(@RequestPart("review") Review review,
                                                     @RequestParam Long userId,
                                                     @RequestParam Long compId){
	return reviewService.addNewReview(review, userId, compId);
	
}
}
