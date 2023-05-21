using UnityEngine;
using UnityEngine.SceneManagement;

public class ButtonController4 : MonoBehaviour
{
    public void OnButtonClick4()
    {
        Debug.Log("Back Home!");
        SceneManager.LoadScene("HomeScene");
    }
}
