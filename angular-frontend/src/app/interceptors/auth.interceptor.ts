import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    const authReq = req.clone({
      setHeaders: {
        "Authorization": `Bearer ${accessToken}`
      }
    })

    return next(authReq);
  }

  return next(req);
};