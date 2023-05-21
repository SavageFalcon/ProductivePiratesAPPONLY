using UnityEngine;
using UnityEngine.SceneManagement;

public class ButtonController : MonoBehaviour
{
    public void OnButtonClick()
    {
        Debug.Log("Land!");
        SceneManager.LoadScene("LandScene");
    }
}
