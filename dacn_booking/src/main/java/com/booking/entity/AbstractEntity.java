package com.booking.entity;

import com.booking.config.AuditorAwareService;
import lombok.Data;
import lombok.ToString;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import javax.persistence.*;
import java.util.Date;


@EntityListeners({AuditingEntityListener.class})
@MappedSuperclass
@Data

public abstract class AbstractEntity<U> {
    @CreatedBy
    @Column(name = "created_by")
    U createdBy;

    @LastModifiedBy
    @Column(name = "modified_by")
    U modifiedBy;

    @CreatedDate
    @Column(name = "created_date",insertable = true, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    Date createdDate;

    @LastModifiedDate
    @Column(name = "modified_date",insertable = false, updatable = true)
    @Temporal(TemporalType.TIMESTAMP)
    Date modifiedDate;
}
