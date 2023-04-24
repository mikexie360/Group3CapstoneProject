package cogent.infotech.com.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name ="Answer")
public class Answer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String description_answer;
	private String img_src;
	private String status;
	private String datetime;
	
	@ManyToOne
	@JoinColumn(name="question_id", nullable=false)
	private Question question;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="aapproved_id" , referencedColumnName="id")
	private User aapproved_by;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="acreated_id" , referencedColumnName="id")
	private User acreated_by;
	
}
