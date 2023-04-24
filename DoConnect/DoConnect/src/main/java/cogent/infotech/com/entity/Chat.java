package cogent.infotech.com.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="Chat")
public class Chat {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String from_user;
	private String to_user;
	private String message;
	private String datetime;
}
