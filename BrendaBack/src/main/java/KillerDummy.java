
public class KillerDummy {
	public static void main(String[] args) {
		java.sql.Date sqlDate = new java.sql.Date(new java.util.Date().getTime());
		System.out.println(sqlDate.getYear());
	}
}