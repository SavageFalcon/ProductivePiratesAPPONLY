using UnityEngine;
using UnityEngine.SceneManagement;

public class ButtonController3 : MonoBehaviour
{
    public void OnButtonClick3()
    {
        Debug.Log("Boat Shop!");
        SceneManager.LoadScene("BoatShop");
    }
}
