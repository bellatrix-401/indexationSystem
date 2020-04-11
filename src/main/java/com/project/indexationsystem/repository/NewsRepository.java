package com.project.indexationsystem.repository;

import com.project.indexationsystem.entity.News;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsRepository extends JpaRepository <News, Long> {
    public News findByUrl(String url);
}