package com.project.indexationsystem.controllers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.project.indexationsystem.entity.News;
import com.project.indexationsystem.model.IndexDel;
import com.project.indexationsystem.model.IndexDir;
import com.project.indexationsystem.model.ResponseObject;
import com.project.indexationsystem.services.NewsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class IndexationController {

    @Autowired
    private NewsService newsService;

    @GetMapping("/content")
    public List<News> getAll(Model model, HttpServletResponse response) throws IOException {
        List<News> news = newsService.getAll();
        if (news.size() > 0) {
            return news;
        } else {
            response.sendError(HttpServletResponse.SC_NO_CONTENT);
            return null;
        }
    }

    @PostMapping(path="/content/check")
    public ResponseObject check(@RequestBody IndexDir i, ResponseObject r) throws Exception {

        URL url;
        try {
            url = new URL(i.getUrl());
        } catch (MalformedURLException e) {
            return (new ResponseObject("rejected"));
        }

        try {
            String inputLine;

            BufferedReader in = new BufferedReader(new InputStreamReader(url.openStream()));

            while ((inputLine = in.readLine()) != null) {
                //inputLine = in.readLine().toString();
                if (inputLine.contains(i.getWord())) {
                    return (new ResponseObject("rejected"));
                }
            }

            in.close();

        } catch(IOException e){ throw e; }

        Boolean status = newsService.save(new News(i.getUrl()));
        if (status) {
            return (new ResponseObject("accepted"));
        } else {
            return (new ResponseObject("rejected"));
        }
    }

    @DeleteMapping("/content")
    public String delete(@RequestBody IndexDel i, HttpServletResponse response) throws IOException {
        Boolean status = newsService.delete(i.getUrl());

        if (status) {
            return "ok";
        } else {
            response.sendError(HttpServletResponse.SC_NO_CONTENT);
            return null;
        }
    }


}