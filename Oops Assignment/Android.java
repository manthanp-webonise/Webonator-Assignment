
public class Android extends Mobile_Phone_Features implements Separate_Features{

	String store="play_store";
	String sys="android";
	
	String cam_no_1="Single Camera";
	String cam_no_2="Dual Camera";
	String cam_no_3="Triple Camera";
	
	String ram_1="4gb";
	String ram_2="8gb";
	String ram_3="16gb";
	
	String int_storage_1="32gb";
	String int_storage_2="64gb";
	String int_storage_3="128gb";

	String app_1="Paytm";
	String app_2="Phone Pay";
	String app_3="Google Pay";
	
	public void android_phone() 
	{
		
		common_features();
		System.out.println("Application Store : "+store);
		System.out.println("Operating System : "+sys);
		
	}
	@Override
	public void camera() 
	{
		System.out.println("Press 1 for "+cam_no_1);
		System.out.println("Press 2 for "+cam_no_2);
		System.out.println("Press 3 for "+cam_no_3);
	}
	@Override
	public void ram() 
	{
		System.out.println("Press 1 for "+ram_1);
		System.out.println("Press 2 for "+ram_2);
		System.out.println("Press 3 for "+ram_3);
	}
	@Override
	public void int_storage() 
	{
		System.out.println("Press 1 for "+int_storage_1);
		System.out.println("Press 2 for "+int_storage_2);
		System.out.println("Press 3 for "+int_storage_3);
		
	}

	@Override
	public void apps() 
	{
		System.out.println("Press 1 for "+app_1);
		System.out.println("Press 2 for "+app_2);
		System.out.println("Press 3 for "+app_3);
		
	}
	
}
