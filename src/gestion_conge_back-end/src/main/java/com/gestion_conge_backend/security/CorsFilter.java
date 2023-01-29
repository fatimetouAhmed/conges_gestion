package com.gestion_conge_backend.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

/**
 * @author Abderrahmane
 */

@Component
public class CorsFilter extends OncePerRequestFilter {
   @Override
   protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
      response.setHeader("Access-Control-Allow-Origin", "*");
      response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
      response.setHeader("Access-Control-Max-Age", "3600");
      response.setHeader("Access-Control-Allow-Headers", "*");
      // response.setHeader("Access-Control-Allow-Headers", "authorization, content-type, xsrf-token, Content-Range, Content-Disposition, Content-Description, GAuth");
      response.addHeader("Access-Control-Expose-Headers", "xsrf-token");
      if ("OPTIONS".equals(request.getMethod())) {
         response.setStatus(HttpServletResponse.SC_OK);
      } else {
         filterChain.doFilter(request, response);
      }
//      filterChain.doFilter(request, response);
   }
}
