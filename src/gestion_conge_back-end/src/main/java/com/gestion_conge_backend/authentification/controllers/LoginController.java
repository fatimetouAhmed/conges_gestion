package com.gestion_conge_backend.authentification.controllers;


import com.gestion_conge_backend.authentification.dtos.LoginDto;
import com.gestion_conge_backend.authentification.dtos.LoginRespDto;
import com.gestion_conge_backend.authentification.services.LoginService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Abderrahmane
 */
@RestController
@RequestMapping("login")
public class LoginController {

    private final LoginService loginService;

    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping
    public LoginRespDto logIn(@RequestBody LoginDto loginDto) {
        return loginService.logIn();
    }

}
