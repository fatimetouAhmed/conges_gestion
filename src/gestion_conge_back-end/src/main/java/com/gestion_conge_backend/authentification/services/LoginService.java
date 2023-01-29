package com.gestion_conge_backend.authentification.services;

import com.gestion_conge_backend.authentification.dtos.LoginRespDto;
import org.springframework.stereotype.Service;

/**
 * @author Abderrahmane
 */
@Service
public class LoginService {

   public LoginRespDto logIn() {
      LoginRespDto loginRespDto = new LoginRespDto();

      loginRespDto.setId(1);
      loginRespDto.setMessage("Ok");
      loginRespDto.setStatus(true);
      loginRespDto.setToken("KLGTFKJKUHOLFGFG62R6THTRH62RTGH65RTHH56RHG");
      loginRespDto.setData(null);

      return loginRespDto;
   }

}
