package com.project.indexationsystem.controllers;

import java.util.List;
import java.util.ArrayList;

import com.project.indexationsystem.entity.News;
import com.project.indexationsystem.services.NewsService;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@WebMvcTest(IndexationController.class)
public class IndexationControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockBean
    private NewsService service;

    @Test
    public void emptyNews_whenGetAll_thenReturnNoContent() throws Exception {
        List<News> allNews = new ArrayList<News>();
        
        when(service.getAll()).thenReturn(allNews);

        mvc.perform(get("/api/content"))
            .andExpect(status().is(204));

    }

    @Test
    public void givenNews_whenGetAll_thenReturnJson() throws Exception {
        News news = new News("http://notasweb.com");
        List<News> allNews = new ArrayList<News>();
        allNews.add(news);
        
        when(service.getAll()).thenReturn(allNews);

        mvc.perform(get("/api/content"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$[0].url", is(news.getUrl())));
        
    }

}