package nlu.axon_active.server.service;

import nlu.axon_active.server.dto.request.RoomRequest;
import nlu.axon_active.server.entity.Room;
import org.springframework.stereotype.Service;

@Service
public interface BaseService<T,U> {
    public U create(T request, Long createBy);
    public U getById(Long id);
    public void update(Long id,T request, Long updateBy);
    public void delete(Long id);



}
