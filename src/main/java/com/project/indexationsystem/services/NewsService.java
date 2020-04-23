package com.project.indexationsystem.services;

import com.project.indexationsystem.entity.News;
import com.project.indexationsystem.repository.NewsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsService {

    @Autowired
    private NewsRepository newsRepository;

    public NewsService(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    public List<News> getAll() {
        return (List<News>)newsRepository.findAll();
    }

    public boolean save(News url) {
        News index = newsRepository.findByUrl(url.getUrl());
        News data = null;
        
        if (index == null) {
            data = newsRepository.save(url);
        } else {
            return true;
        }
        
        if (data != null) {
            return true;
        } else {
            return false;
        }   
    }

    public Boolean delete(String url) {
        News indexDel = newsRepository.findByUrl(url);

        if (indexDel != null) {
            newsRepository.delete(indexDel);
            return true;
        } else {
            return false;
        }
    }
    
}