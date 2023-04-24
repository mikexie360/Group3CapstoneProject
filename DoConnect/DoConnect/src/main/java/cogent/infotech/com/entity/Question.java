package cogent.infotech.com.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name ="Question")
public class Question {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String description_question;
	private String image_src;
	private String datetime;
	private String status;
	private String topic;
	private String title;
	@OneToMany(mappedBy = "question", fetch=FetchType.EAGER)
	@JsonIgnore
	// one question to many answers
	private List<Answer>answers;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="qcreated_id" , referencedColumnName="id")
	private User qcreated_by;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="qapproved_by" , referencedColumnName="id")
	private User qapproved_by;
	
	
}
