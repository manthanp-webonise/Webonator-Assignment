import java.util.Scanner;

public class Cell_Phone{

	public static void main(String[] args) throws Exception {
		String cam_str = null;
		String ram_str = null;
		String int_storage = null;
		Scanner scn = new Scanner(System.in);
		int input = 0;
		while (input < 3) {
			System.out.println("\nWelcome to Cell_Phone Gallery:");
			System.out.println("Press 1 for Android");
			System.out.println("Press 2 for iOS");
			input = scn.nextInt();

			switch (input) {
			case 1:
				Android and = new Android();
				System.out.println("\nWelcome Android User.. Select Features from following:");
				System.out.println("\nSelect number of camera's:");
				and.camera();
				int a = scn.nextInt();
				if (a == 1)
					cam_str = and.cam_no_1;
				else if (a == 2)
					cam_str = and.cam_no_2;
				else if (a == 3)
					cam_str = and.cam_no_3;

				System.out.println("\nSelect ram");
				and.ram();
				int b = scn.nextInt();
				if (b == 1)
					ram_str = and.ram_1;
				else if (b == 2)
					ram_str = and.ram_2;
				else if (b == 3)
					ram_str = and.ram_3;

				System.out.println("\nSelect Internal Storage");
				and.int_storage();
				int c = scn.nextInt();
				if (c == 1)
					int_storage = and.int_storage_1;
				else if (c == 2)
					int_storage = and.int_storage_2;
				else if (c == 3)
					int_storage = and.int_storage_3;

				System.out.println("\nYou have selected following features in your android device:");
				and.android_phone();
				System.out.println("Number of Camera's : " + cam_str);
				System.out.println("Random Access Memory : " + ram_str);
				System.out.println("Internal Storage : " + int_storage);
				System.out.println("---------------------------------------------");

				break;
			case 2:
				IOS is = new IOS();
				System.out.println("\nWelcome IOS User.. Select Features from following:");
				System.out.println("Select number of camera's");
				is.camera();
				int e = scn.nextInt();
				if (e == 1)
					cam_str = is.cam_no_1;
				else if (e == 2)
					cam_str = is.cam_no_2;
				else if (e == 3)
					cam_str = is.cam_no_3;

				System.out.println("\nSelect ram");
				is.ram();
				int f = scn.nextInt();
				if (f == 1)
					ram_str = is.ram_1;
				else if (f == 2)
					ram_str = is.ram_2;
				else if (f == 3)
					ram_str = is.ram_3;

				System.out.println("\nSelect Internal Storage");
				is.int_storage();
				int g = scn.nextInt();
				if (g == 1)
					int_storage = is.int_storage_1;
				else if (g == 2)
					int_storage = is.int_storage_2;
				else if (g == 3)
					int_storage = is.int_storage_3;

				System.out.println("\nYou have selected following features in your iOS device:");
				is.IOS_Phone();
				System.out.println("Number of Camera's : " + cam_str);
				System.out.println("Random Access Memory : " + ram_str);
				System.out.println("Internal Storage : " + int_storage);
				break;

				default:
				System.out.println("\nPlease Enter Correct option");
			}
		}
		scn.close();

	}

}
