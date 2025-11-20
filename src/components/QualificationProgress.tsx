import { CheckCircle, Circle, Lock } from 'lucide-react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

export function QualificationProgress() {
  return (
    <div className="p-4 space-y-4">
      <div>
        <h2 className="text-gray-900 mb-1">資格進捗状況</h2>
        <p className="text-gray-600 text-sm">3段階の資格取得を目指しましょう</p>
      </div>

      {/* 基礎資格 */}
      <Card className="p-4 border-green-200 bg-green-50">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <CheckCircle className="size-6 text-green-600" />
            <div>
              <h3 className="text-gray-900">基礎資格</h3>
              <Badge className="bg-green-600 mt-1">取得済</Badge>
            </div>
          </div>
          <p className="text-green-600">100%</p>
        </div>
        
        <div className="space-y-3 mt-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 text-sm">入会手続き</span>
            <CheckCircle className="size-5 text-green-600" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 text-sm">基礎講習受講</span>
            <CheckCircle className="size-5 text-green-600" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 text-sm">基礎試験合格</span>
            <CheckCircle className="size-5 text-green-600" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 text-sm">実務経験1年</span>
            <CheckCircle className="size-5 text-green-600" />
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-green-200">
          <p className="text-gray-700 text-sm">取得日: 2024年4月1日</p>
        </div>
      </Card>

      {/* 中級資格 */}
      <Card className="p-4 border-blue-200">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <Circle className="size-6 text-blue-600" />
            <div>
              <h3 className="text-gray-900">中級資格</h3>
              <Badge className="bg-blue-600 mt-1">取得中</Badge>
            </div>
          </div>
          <p className="text-blue-600">75%</p>
        </div>
        
        <Progress value={75} className="mb-4 h-3" />
        
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-gray-700 text-sm">教育プログラム受講</span>
              <CheckCircle className="size-5 text-green-600" />
            </div>
            <Progress value={100} className="h-1.5" />
            <p className="text-gray-600 text-xs mt-0.5">20/20単位</p>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-gray-700 text-sm">実践ワークショップ</span>
              <CheckCircle className="size-5 text-green-600" />
            </div>
            <Progress value={100} className="h-1.5" />
            <p className="text-gray-600 text-xs mt-0.5">10/10単位</p>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-gray-700 text-sm">専門研修参加</span>
              <Circle className="size-5 text-blue-600" />
            </div>
            <Progress value={60} className="h-1.5" />
            <p className="text-gray-600 text-xs mt-0.5">6/10単位（あと4単位）</p>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-gray-700 text-sm">実務経験3年</span>
              <Circle className="size-5 text-blue-600" />
            </div>
            <Progress value={66} className="h-1.5" />
            <p className="text-gray-600 text-xs mt-0.5">2年経過（残り1年）</p>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <div className="bg-blue-50 rounded-lg p-3">
            <p className="text-blue-900 mb-1">次のステップ</p>
            <p className="text-blue-700 text-sm">専門研修に4単位分参加してください</p>
            <p className="text-blue-600 text-sm mt-1">推定達成: 2026年3月</p>
          </div>
        </div>
      </Card>

      {/* 上級資格 */}
      <Card className="p-4 border-gray-200 bg-gray-50">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <Lock className="size-6 text-gray-400" />
            <div>
              <h3 className="text-gray-900">上級資格</h3>
              <Badge variant="outline" className="mt-1">未開始</Badge>
            </div>
          </div>
          <p className="text-gray-500">0%</p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between opacity-50">
            <span className="text-gray-700 text-sm">中級資格取得</span>
            <Circle className="size-5 text-gray-400" />
          </div>
          <div className="flex items-center justify-between opacity-50">
            <span className="text-gray-700 text-sm">上級プログラム受講</span>
            <Circle className="size-5 text-gray-400" />
          </div>
          <div className="flex items-center justify-between opacity-50">
            <span className="text-gray-700 text-sm">論文提出</span>
            <Circle className="size-5 text-gray-400" />
          </div>
          <div className="flex items-center justify-between opacity-50">
            <span className="text-gray-700 text-sm">実務経験5年</span>
            <Circle className="size-5 text-gray-400" />
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-gray-600 text-sm">中級資格取得後に開始できます</p>
        </div>
      </Card>
    </div>
  );
}
