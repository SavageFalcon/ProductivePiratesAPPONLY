using UnityEngine;
using UnityEngine.SceneManagement;

public class ButtonController1 : MonoBehaviour
{
    public void OnButtonClick1()
    {
        Debug.Log("Water!");
        SceneManager.LoadScene("WaterScene");
    }
}
