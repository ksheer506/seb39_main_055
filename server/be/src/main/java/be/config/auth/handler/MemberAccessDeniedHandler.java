package be.config.auth.handler;

import be.utils.ErrorResponder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
public class MemberAccessDeniedHandler implements AccessDeniedHandler { //AccessDeniedHandler->
                                                                // 인증에 성공했지만, 해당 리소스에 대한 권한 없을때 호출되는 핸들러
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
        ErrorResponder.sendErrorResponse(response, HttpStatus.FORBIDDEN);
        log.warn("Forbidden error happened: {}", accessDeniedException.getMessage());
    }
}
