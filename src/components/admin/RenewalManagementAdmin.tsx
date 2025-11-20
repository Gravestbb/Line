import { AlertCircle, Send, Download, Filter } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export function RenewalManagementAdmin() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900 mb-1">更新管理</h2>
          <p className="text-gray-600">会員の資格更新状況を管理します</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="size-4" />
            レポート出力
          </Button>
          <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
            <Send className="size-4" />
            一括リマインド送信
          </Button>
        </div>
      </div>

      {/* 統計 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-gray-600 text-sm mb-1">更新対象者</p>
          <p className="text-gray-900 text-2xl">48名</p>
        </Card>
        <Card className="p-4 border-green-200 bg-green-50">
          <p className="text-gray-600 text-sm mb-1">更新完了</p>
          <p className="text-green-600 text-2xl">35名</p>
        </Card>
        <Card className="p-4 border-amber-200 bg-amber-50">
          <p className="text-gray-600 text-sm mb-1">更新未完了</p>
          <p className="text-amber-600 text-2xl">13名</p>
        </Card>
        <Card className="p-4">
          <p className="text-gray-600 text-sm mb-1">平均達成率</p>
          <p className="text-gray-900 text-2xl">82%</p>
        </Card>
      </div>

      {/* フィルター */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-3">
          <Select>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="更新状態" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">すべて</SelectItem>
              <SelectItem value="completed">更新完了</SelectItem>
              <SelectItem value="pending">更新必要</SelectItem>
              <SelectItem value="urgent">緊急（1ヶ月以内）</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="達成率" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">すべて</SelectItem>
              <SelectItem value="high">80%以上</SelectItem>
              <SelectItem value="medium">50-79%</SelectItem>
              <SelectItem value="low">50%未満</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="期限" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">すべて</SelectItem>
              <SelectItem value="month1">1ヶ月以内</SelectItem>
              <SelectItem value="month3">3ヶ月以内</SelectItem>
              <SelectItem value="month6">6ヶ月以内</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="size-4" />
            詳細絞り込み
          </Button>
        </div>
      </Card>

      {/* 更新対象者一覧 */}
      <Card className="p-6">
        <h3 className="text-gray-900 mb-4">更新対象者一覧</h3>
        
        <div className="space-y-3">
          {/* 緊急対応が必要な会員 */}
          <div className="border-2 border-red-200 rounded-lg p-4 bg-red-50">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-gray-900">田中 美咲（M-20230122）</h4>
                  <Badge className="bg-red-600">期限超過</Badge>
                  <Badge variant="outline">基礎資格</Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  <div>
                    <p className="text-gray-600 text-xs mb-1">更新期限</p>
                    <p className="text-red-600">2025/10/01（超過）</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs mb-1">総合進捗</p>
                    <p className="text-red-600">45%</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs mb-1">不足単位</p>
                    <p className="text-red-600">18単位</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs mb-1">最終ログイン</p>
                    <p className="text-gray-900">2025/09/10</p>
                  </div>
                </div>
                <Progress value={45} className="h-2 mb-2" />
                <div className="flex gap-2 text-sm">
                  <span className="text-gray-700">A: 8/15</span>
                  <span className="text-gray-700">B: 5/10</span>
                  <span className="text-gray-700">C: 2/5</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm">詳細</Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Send className="size-4 mr-1" />
                  通知
                </Button>
              </div>
            </div>
          </div>

          {/* 要フォロー会員 */}
          <div className="border border-amber-200 rounded-lg p-4 bg-amber-50">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-gray-900">山田 太郎（M-20240401）</h4>
                  <Badge className="bg-amber-600">4ヶ月後</Badge>
                  <Badge variant="outline">基礎資格</Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  <div>
                    <p className="text-gray-600 text-xs mb-1">更新期限</p>
                    <p className="text-amber-600">2027/04/01</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs mb-1">総合進捗</p>
                    <p className="text-amber-600">78%</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs mb-1">不足単位</p>
                    <p className="text-amber-600">8単位</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs mb-1">最終ログイン</p>
                    <p className="text-gray-900">2025/11/18</p>
                  </div>
                </div>
                <Progress value={78} className="h-2 mb-2" />
                <div className="flex gap-2 text-sm">
                  <span className="text-green-600">A: 15/15 ✓</span>
                  <span className="text-gray-700">B: 8/10</span>
                  <span className="text-amber-600">C: 3/5</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm">詳細</Button>
                <Button variant="outline" size="sm">
                  <Send className="size-4 mr-1" />
                  通知
                </Button>
              </div>
            </div>
          </div>

          {/* 順調な会員 */}
          <div className="border border-green-200 rounded-lg p-4 bg-green-50">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-gray-900">佐藤 花子（M-20230815）</h4>
                  <Badge className="bg-green-600">更新完了</Badge>
                  <Badge variant="outline">上級資格</Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  <div>
                    <p className="text-gray-600 text-xs mb-1">更新期限</p>
                    <p className="text-green-600">2026/08/15</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs mb-1">総合進捗</p>
                    <p className="text-green-600">100%</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs mb-1">達成</p>
                    <p className="text-green-600">完了</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs mb-1">最終ログイン</p>
                    <p className="text-gray-900">2025/11/19</p>
                  </div>
                </div>
                <Progress value={100} className="h-2 mb-2" />
                <div className="flex gap-2 text-sm">
                  <span className="text-green-600">A: 15/15 ✓</span>
                  <span className="text-green-600">B: 10/10 ✓</span>
                  <span className="text-green-600">C: 5/5 ✓</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm">詳細</Button>
              </div>
            </div>
          </div>

          <div className="border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-gray-900">高橋 健太（M-20240520）</h4>
                  <Badge className="bg-blue-600">7ヶ月後</Badge>
                  <Badge variant="outline">基礎資格</Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  <div>
                    <p className="text-gray-600 text-xs mb-1">更新期限</p>
                    <p className="text-blue-600">2027/05/20</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs mb-1">総合進捗</p>
                    <p className="text-blue-600">92%</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs mb-1">不足単位</p>
                    <p className="text-blue-600">3単位</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs mb-1">最終ログイン</p>
                    <p className="text-gray-900">2025/11/19</p>
                  </div>
                </div>
                <Progress value={92} className="h-2 mb-2" />
                <div className="flex gap-2 text-sm">
                  <span className="text-green-600">A: 15/15 ✓</span>
                  <span className="text-green-600">B: 10/10 ✓</span>
                  <span className="text-blue-600">C: 2/5</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm">詳細</Button>
                <Button variant="outline" size="sm">
                  <Send className="size-4 mr-1" />
                  通知
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* リマインド設定 */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="size-5 text-blue-600" />
          <h3 className="text-gray-900">自動リマインド設定</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="text-gray-900">10ヶ月前通知</p>
              <p className="text-gray-600 text-sm">更新開始のお知らせ</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="text-gray-900">6ヶ月前通知</p>
              <p className="text-gray-600 text-sm">進捗確認のリマインド</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="text-gray-900">3ヶ月前通知</p>
              <p className="text-gray-600 text-sm">残り期間の注意喚起</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="text-gray-900">1ヶ月前通知</p>
              <p className="text-gray-600 text-sm">最終確認のリマインド</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </Card>
    </div>
  );
}
