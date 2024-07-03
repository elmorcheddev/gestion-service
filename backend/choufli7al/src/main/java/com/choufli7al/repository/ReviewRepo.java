package com.choufli7al.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.choufli7al.model.Competance;
import com.choufli7al.model.Review;
import com.choufli7al.model.Utilisateurs;


public interface ReviewRepo  extends JpaRepository<Review, Long> {

	List<Review> findByCompetance(Competance competance);
	@Query("SELECT AVG(r.start) FROM Review r WHERE r.competance.id = :competanceId")
    Double findAverageRatingByCompetanceId(Long competanceId);
	boolean existsByCompetanceAndStart(Competance competance, double start);
}
