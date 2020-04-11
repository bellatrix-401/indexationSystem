package com.project.indexationsystem.services;

import com.project.indexationsystem.entity.News;
import com.project.indexationsystem.repository.NewsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsService {

    @Autowired
    private NewsRepository newsData;

    public List<News> getAll() {
        return (List<News>)newsData.findAll();
    }

    public boolean save(News n) {
        News data = newsData.save(n);
        if (data != null) {
            return true;
        } else {
            return false;
        }   
    }

    public Boolean delete(String url) {
        News indexDel = newsData.findByUrl(url);

        if (indexDel != null) {
            newsData.delete(indexDel);
            return true;
        } else {
            return false;
        }
    }
    
}